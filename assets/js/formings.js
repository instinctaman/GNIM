
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".reg-form");

  forms.forEach((form, index) => {
    const stateSelect = form.querySelector("#state");
    const citySelect = form.querySelector("#city");
    const captchaDisplay = form.querySelector(".captcha");
    const captchaInput = form.querySelector("#captchaInput");
    const captchaError = form.querySelector("#captchaError");

    // Store CAPTCHA per form
    let currentCaptcha = "";

    // Fetch states
    async function fetchStates() {
      try {
        const res = await fetch("https://countriesnow.space/api/v0.1/countries/states", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ country: "India" }),
        });
        const data = await res.json();

        if (data?.data?.states) {
          stateSelect.innerHTML = '<option value="">-- Select State --</option>';
          data.data.states.forEach(state => {
            const opt = document.createElement("option");
            opt.value = state.name;
            opt.text = state.name;
            stateSelect.appendChild(opt);
          });
        }
      } catch (err) {
        stateSelect.innerHTML = '<option value="">Error loading states</option>';
        console.error("State fetch error:", err);
      }
    }

    // Fetch cities
    async function fetchCities() {
      const selectedState = stateSelect.value;
      if (!selectedState) {
        citySelect.innerHTML = '<option value="">Select a state first</option>';
        return;
      }

      try {
        const res = await fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ country: "India", state: selectedState }),
        });
        const data = await res.json();

        citySelect.innerHTML = '<option value="">-- Select City --</option>';
        if (Array.isArray(data.data)) {
          data.data.forEach(city => {
            const opt = document.createElement("option");
            opt.value = city;
            opt.text = city;
            citySelect.appendChild(opt);
          });
        }
      } catch (err) {
        citySelect.innerHTML = '<option value="">Error loading cities</option>';
        console.error("City fetch error:", err);
      }
    }

    // Generate CAPTCHA
    function generateCaptcha() {
      const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
      currentCaptcha = "";
      for (let i = 0; i < 6; i++) {
        currentCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      captchaDisplay.textContent = currentCaptcha;
      captchaInput.value = "";
      clearCaptchaError();
    }

    // Validate CAPTCHA
    function validateCaptcha() {
      if (captchaInput.value.trim() !== currentCaptcha) {
        captchaInput.classList.add("error");
        captchaError.style.display = "block";
        return false;
      }
      clearCaptchaError();
      return true;
    }

    function clearCaptchaError() {
      captchaInput.classList.remove("error");
      captchaError.style.display = "none";
    }

    // Submit handler
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validateCaptcha()) return;

      const name = form.querySelector('input[placeholder="Enter Name*"]').value;
      const email = form.querySelector('input[placeholder="Enter Email*"]').value;
      const phone = form.querySelector("#mobile").value;
      const state = form.querySelector("#state").value;
      const city = form.querySelector("#city").value;
      const course = form.querySelector("#course-select").value;

      // Do backend submit here
      console.log("Form Data", { name, email, phone, state, city, course });

      alert("Form submitted successfully (Demo only)");
    });

    // Attach dynamic events
    stateSelect.addEventListener("change", fetchCities);
    form.querySelector("span[onclick='generateCaptcha()']").onclick = generateCaptcha;
    captchaInput.addEventListener("input", clearCaptchaError);

    // Initialize
    fetchStates();
    generateCaptcha();
    clearCaptchaError();
  });
});

