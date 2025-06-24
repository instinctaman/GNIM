
const stateSelect = document.getElementById("state");
const citySelect = document.getElementById("city");

// Fetch states of India
async function fetchStates() {
  const response = await fetch("https://countriesnow.space/api/v0.1/countries/states", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ country: "India" })
  });

  const data = await response.json();
  stateSelect.innerHTML = '<option value="">-- Select State --</option>';

  data.data.states.forEach(state => {
    const option = document.createElement("option");
    option.value = state.name;
    option.text = state.name;
    stateSelect.appendChild(option);
  });
}

// Fetch cities when state is selected
async function fetchCities() {
  const selectedState = stateSelect.value;

  if (!selectedState) {
    citySelect.innerHTML = '<option value="">Select a state first</option>';
    return;
  }

  const response = await fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      country: "India",
      state: selectedState
    })
  });

  const data = await response.json();
  citySelect.innerHTML = '<option value="">-- Select City --</option>';

  data.data.forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    option.text = city;
    citySelect.appendChild(option);
  });
}

// Call fetchStates on page load
fetchStates();
function handleSubmit(e) {
  e.preventDefault();

  const response = grecaptcha.getResponse();
  if (response.length === 0) {
    alert("Please verify you are human via the captcha.");
    return false;
  }

  // Here you can send data to your backend via fetch or ajax
  alert("Form submitted successfully (Demo only)");
  return false;
}
let currentCaptcha = "";

    function generateCaptcha() {
      const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
      let captcha = "";
      for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      currentCaptcha = captcha;
      document.getElementById("captcha").innerText = captcha;
      document.getElementById("captchaInput").value = "";
      clearCaptchaError();
    }

    function validateCaptcha() {
      const input = document.getElementById("captchaInput").value.trim();
      if (input === currentCaptcha) {
        // alert("CAPTCHA verified successfully!");
      } else {
        document.getElementById("captchaInput").classList.add("error");
        document.getElementById("captchaError").style.display = "block";
      }
    }

    function clearCaptchaError() {
      document.getElementById("captchaInput").classList.remove("error");
      document.getElementById("captchaError").style.display = "none";
    }

    // Initialize CAPTCHA on page load
    window.onload = generateCaptcha;