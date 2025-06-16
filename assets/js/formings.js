
const stateToCities = {
  "Andhra Pradesh": [
    "Adoni", "Anantapuramu", "Bhimavaram", "Chilakaluripet", "Chirala",
    "Chittoor", "Dharmavaram", "Eluru", "Guntakal", "Guntur",
    "Gudivada", "Hindupur", "Kadapa", "Kadiri", "Kakinada",
    "Kurnool", "Madanapalle", "Machilipatnam", "Mangalagiri‑Tadepalli", "Nandyal",
    "Narasaraopet", "Nellore", "Ongole", "Proddatur", "Rajamahendravaram",
    "Tadepalligudem", "Tadipatri", "Tenali", "Tirupati", "Tuni",
    "Vijayawada", "Visakhapatnam", "Vizianagaram"
  ],

  "Arunachal Pradesh": [
    "Aalo (Along)", "Anini", "Basar", "Bomdila", "Changlang",
    "Daporijo", "Deomali", "Dirang", "Hawai", "Itanagar",
    "Jairampur", "Khonsa", "Koloriang", "Longding", "Miao",
    "Naharlagun", "Nampong", "Namsai", "Pasighat", "Roing",
    "Sagalee", "Seppa", "Tawang", "Tezu", "Yingkiong"
  ],
  "Assam": [
    "Abhayapuri", "Barpeta", "Barpeta Road", "Biswanath Chariali", "Bongaigaon",
    "Chabua", "Dhekiajuli", "Dhubri", "Dibrugarh", "Diphu",
    "Dergaon", "Doboka", "Doomdooma", "Goalpara", "Guwahati",
    "Haflong", "Hailakandi", "Hojai", "Jorhat", "Karimganj",
    "Kharupetia", "Kokrajhar", "Lakhipur", "Lanka", "Lumding",
    "Makum", "Mangaldoi", "Morigaon", "Nagaon", "Naharkatiya",
    "Nalbari", "Nazira", "North Lakhimpur", "Rangia", "Silapathar",
    "Silchar", "Sivasagar", "Sonari", "Tangla", "Tezpur",
    "Tihu"
  ],
  "Bihar": [
    "Ara", "Bagaha", "Bairgania", "Bakhtiarpur", "Barh",
    "Barharia", "Bariarpur", "Barauni", "Begusarai", "Benipur",
    "Bhagalpur", "Bhabua", "Bihar Sharif", "Bodh Gaya", "Buxar",
    "Chhapra", "Danapur", "Darbhanga", "Dehri", "Dinapur Nizamat",
    "Fatuha", "Forbesganj", "Gaya", "Hajipur", "Jahanabad",
    "Jamalpur", "Katihar", "Khagaul", "Madhubani", "Masaurhi",
    "Mokama", "Motihari", "Muzaffarpur", "Munger", "Patna",
    "Phulwari Sharif", "Purnia", "Saharsa", "Samastipur", "Sasaram",
    "Sheikhpura", "Sitamarhi", "Siwan", "Supaul", "Vaishali"
  ],
  "Chhattisgarh": [
    "Abhanpur", "Adbhar", "Ahiwara", "Akaltara", "Ambagarh Chowki",
    "Ambikapur", "Anda", "Antagarh", "Arang", "Baikunthpur",
    "Balod", "Baloda Bazar", "Basna", "Bemetara", "Berla",
    "Bhatapara", "Bhatgaon", "Bilaigarh", "Bilaspur", "Bilha",
    "Birgaon", "Bishrampur", "Bade Bacheli", "Charoda", "Champa",
    "Chhuikhadan", "Chirimiri", "Churcha", "Daldal Seoni", "Dalli‑Rajhara",
    "Dantewada", "Deokar", "Deori", "Dhamdha", "Dhamtari",
    "Dharamjaigarh", "Dipka", "Dondi Lohara", "Dongargarh", "Durg (Bhilai‑Nagar)",
    "Frezarpur", "Gaurella", "Geedam", "Gharghora", "Hatkachora",
    "Hattipenta", "Jagdalpur", "Janjgir", "Janjgir‑Naila", "Jashpur Nagar",
    "Kasdol", "Katghora", "Kawardha", "Kanker", "Kondagaon",
    "Korba", "Kota (Kargi Road)", "Kharsia", "Khongapani", "Kumhari",
    "Kunkuri", "Kurud", "Lormi", "Mahasamund", "Makdi",
    "Masuri", "Mowa", "Mungeli", "Naya Raipur", "Navagarh",
    "Pakhanjore", "Pandariya", "Pandatarai", "Pathariya", "Patan",
    "Pithora", "Prem Nagar", "Raigarh", "Raipur", "Ramanujganj",
    "Rajnandgaon", "Ratanpur", "Risali", "Saja", "Sakti",
    "Saraipali", "Sarona", "Sejbahar", "Shivrinarayan", "Simga",
    "Sitapur", "Sonhat", "Sujapur", "Surajpur", "Takhatpur",
    "Tatibandh", "Tilda"
  ],
  "Goa": [
    "Bambolim", "Bicholim", "Calapor", "Canacona", "Chimbel",
    "Corlim", "Cuncolim", "Cumbarjua", "Curchorem", "Goa Velha",
    "Jua", "Mapusa", "Margao", "Mercurim", "Murda",
    "Old Goa", "Panaji", "Pernem", "Ponda", "Quepem",
    "Ribandar", "Sanquelim", "Sanguem", "Taleigao", "Valpoi",
    "Vasco da Gama"
  ], "Gujarat": [
    "Ahmedabad", "Amreli", "Anand", "Bharuch", "Bhavnagar",
    "Bhuj", "Botad", "Dahod", "Deesa", "Gandhidham",
    "Gandhinagar", "Godhra", "Gondal", "Jetpur", "Junagadh",
    "Kalol", "Mehsana", "Morbi", "Nadiad", "Navsari",
    "Palanpur", "Patan", "Porbandar", "Rajkot", "Surat",
    "Surendranagar", "Vadodara", "Valsad", "Vapi", "Veraval"
  ],
  "Haryana": [
    "Ambala", "Bahadurgarh", "Bhiwani", "Cheeka", "Chhachhrauli",
    "Charkhi Dadri", "Dharuhera", "Dundahera", "Ellenabad", "Farakhpur",
    "Faridabad", "Farrukhnagar", "Fatehabad", "Ferozepur Jhirka", "Ganaur",
    "Gharaunda", "Gohana", "Gurugram", "Hailey Mandi", "Hansi",
    "Hisar", "Hodal", "Indri", "Jagadhri", "Jind",
    "Jhajjar", "Julana", "Kaithal", "Kalan Wali", "Kalka",
    "Kalas", "Karnal", "Kharkhoda", "Narwana", "Narnaund",
    "Palwal", "Panchkula", "Panipat", "Pundri", "Raipur Rani",
    "Ratia", "Rewari", "Rohtak", "Samalkha", "Sasauli",
    "Sirsa", "Sohna", "Sonipat", "Taoru", "Taraori",
    "Thanesar", "Tohana", "Uncha Siwana", "Yamunanagar"
  ],
  "Himachal Pradesh": [
    "Baddi", "Bilaspur", "Chamba", "Dharamshala", "Hamirpur",
    "Joginder Nagar", "Kangra", "Kullu", "Manali", "Mandi",
    "Nahan", "Nurpur", "Palampur", "Paonta Sahib", "Shimla",
    "Solan", "Sundarnagar", "Una"
  ],
  "Jharkhand": [
    "Adityapur", "Basukinath", "Bokaro Steel City", "Chas", "Chirkunda",
    "Deoghar", "Dhanbad", "Dumka", "Girdih", "Gomoh",
    "Hazaribagh", "Jamtara", "Jamshedpur", "Katrash", "Kharkhari",
    "Mango", "Medininagar", "Pakur", "Phusro", "Rajmahal",
    "Ramgarh", "Ranchi", "Sahnidih", "Sahibganj", "Topchanchi"
  ],
  "Karnataka": [
    "Arsikere", "Bagalkot", "Ballari", "Belagavi", "Bengaluru",
    "Bhadravati", "Bidar", "Chikmagalur", "Chitradurga", "Davanagere",
    "Gadag-Betageri", "Gangavati", "Hassan", "Hospet", "Hubli-Dharwad",
    "Kalaburagi", "Kolar", "Mandya", "Mangaluru", "Mysore",
    "Raichur", "Ranebennuru", "Robertsonpet", "Shimoga", "Tumkur",
    "Udupi", "Vijayapura"
  ],
  "Kerala": [
    "Alappuzha", "Aluva", "Angamaly", "Chalakudy", "Cherthala",
    "Irinjalakuda", "Kannur", "Kanhangad", "Kayamkulam", "Kochi",
    "Kodungallur", "Kollam", "Kothamangalam", "Kottayam", "Kozhikode",
    "Malappuram", "Manjeri", "Muvattupuzha", "Nedumangad", "Neyyattinkara",
    "Ottappalam", "Palakkad", "Payyanur", "Perumbavoor", "Ponnani",
    "Shoranur", "Taliparamba", "Thiruvananthapuram", "Thodupuzha", "Thrippunithura",
    "Thrissur", "Vadakara", "Varkala"
  ],
  "Madhya Pradesh": [
    "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur",
    "Chhindwara", "Damoh", "Datia", "Dewas", "Guna",
    "Gwalior", "Hoshangabad", "Indore", "Itarsi", "Jabalpur",
    "Khandwa", "Mandsaur", "Morena", "Murwara (Katni)", "Nagda",
    "Neemuch", "Pithampur", "Ratlam", "Rewa", "Sagar",
    "Satna", "Sehore", "Seoni", "Shivpuri", "Singrauli",
    "Ujjain", "Vidisha"
  ],
  "Maharashtra": [
    "Achalpur", "Ahmednagar", "Akola", "Ambarnath", "Amravati",
    "Aurangabad", "Badlapur", "Barshi", "Beed", "Bhiwandi-Nizampur",
    "Bhusawal", "Chandrapur", "Dhule", "Gondia", "Hinganghat",
    "Ichalkaranji", "Jalgaon", "Jalna", "Kalyan-Dombivli", "Kolhapur",
    "Latur", "Malegaon", "Mira-Bhayandar", "Mumbai", "Nagpur",
    "Nanded-Waghala", "Nandurbar", "Nashik", "Navi Mumbai", "Osmanabad",
    "Panvel", "Parbhani", "Pimpri-Chinchwad", "Pune", "Sangli-Miraj-Kupwad",
    "Satara", "Solapur", "Thane", "Udgir", "Ulhasnagar",
    "Vasai-Virar", "Wardha", "Yavatmal"
  ],
  "Manipur": [
    "Bishnupur", "Churachandpur", "Heirok", "Imphal", "Imphal East",
    "Imphal West", "Jiribam", "Kakching", "Kumbi", "Kwakta",
    "Mayang Imphal", "Moirang", "Moreh", "Nambol", "Samurou",
    "Tamenglong", "Thoubal", "Ukhrul", "Wangoi", "Yairipok"
  ],
  "Meghalaya": [
    "Baghmara", "Cherrapunji", "Jowai", "Madanrting", "Mairang",
    "Mawlai", "Nongmynsong", "Nongpoh", "Nongstoin", "Nongthymmai",
    "Pynursla", "Pynthorumkhrah", "Resubelpara", "Shillong",
    "Shillong Cantonment", "Sohra", "Tura", "Umroi", "Williamnagar"
  ],
  "Mizoram": [
    "Aizawl", "Bairabi", "Biate", "Champhai", "Darlawn",
    "Hnahthial", "Khawhai", "Khawzawl", "Kolasib", "Lawngtlai",
    "Lengpui", "Lunglei", "Mamit", "N. Kawnpui", "North Vanlaiphai",
    "Saiha", "Sairang", "Saitual", "Serchhip", "Thenzawl",
    "Tlabung", "Vairengte", "Zawlnuam"
  ],
  "Nagaland": [
    "Aboi", "Chozuba", "Chümoukedima", "Dimapur", "Jalukie",
    "Kiphire", "Kohima", "Longleng", "Mangkolemba", "Medziphema",
    "Meluri", "Mokokchung", "Mon", "Noklak", "Peren",
    "Pfutsero", "Phek", "Shamator", "Tizit", "Tuensang",
    "Tseminyü", "Tuli", "Wokha", "Zunheboto"
  ],
  "Odisha": [
    "Angul", "Aska", "Balangir", "Balasore", "Banapur",
    "Barbil", "Baripada", "Bargarh", "Berhampur", "Bhadrak",
    "Bhawanipatna", "Bhubaneswar", "Biramitrapur", "Bolangir", "Brahmapur",
    "Chhatrapur", "Cuttack", "Dhamnagar", "Dhenkanal", "Ganjam",
    "Gunupur", "Hinjilicut", "Jeypore", "Jharsuguda", "Joda",
    "Junagarh", "Kalahandi", "Kendrapara", "Kendujhar", "Khordha",
    "Koraput", "Kujang", "Malkangiri", "Nabarangpur", "Nayagarh",
    "Paradeep", "Phulbani", "Puri", "Rajgangpur", "Rairangpur",
    "Rayagada", "Rourkela", "Sambalpur", "Soro", "Sunabeda",
    "Sundargarh", "Talcher", "Titlagarh"
  ],
  "Punjab": [
    "Abohar", "Ahmedgarh", "Amritsar", "Banga", "Barnala",
    "Bathinda", "Batala", "Dasuya", "Dhuri", "Dirba",
    "Faridkot", "Fazilka", "Firozpur", "Gobindgarh", "Gurdaspur",
    "Hoshiarpur", "Jagraon", "Jalandhar", "Kapurthala", "Khanna",
    "Kharar", "Kotkapura", "Ludhiana", "Malerkotla", "Malout",
    "Mansa", "Mohali", "Moga", "Morinda", "Muktsar",
    "Nabha", "Nakodar", "Nawanshahr", "Pathankot", "Patiala",
    "Phagwara", "Rajpura", "Rupnagar", "Samana", "Sangrur",
    "Sirhind", "Sunam", "Tarn Taran", "Zirakpur"
  ],
  "Rajasthan": [
    "Ajmer", "Alwar", "Balotra", "Banswara", "Baran",
    "Barmer", "Beawar", "Bharatpur", "Bhilwara", "Bikaner",
    "Bundi", "Chittorgarh", "Churu", "Dausa", "Didwana",
    "Dholpur", "Dungarpur", "Gangapur City", "Hanumangarh", "Jaipur",
    "Jaisalmer", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli",
    "Kishangarh", "Kota", "Losal", "Makrana", "Nagaur",
    "Nathdwara", "Neem-Ka-Thana", "Nimbahera", "Nokha", "Pali",
    "Phalodi", "Pilani", "Pratapgarh", "Rajsamand", "Ratangarh",
    "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Sujangarh",
    "Tijara", "Tonk", "Udaipur", "Vijainagar"
  ],
  "Sikkim": [
    "Chungthang", "Dentam", "Gangtok", "Gyalshing", "Jorethang",
    "Lachen", "Lachung", "Majitar", "Makha", "Mangan",
    "Namchi", "Naya Bazar", "Pakyong", "Rangpo", "Ravangla",
    "Rhenock", "Singhtam", "Soreng", "Yangang", "Zuluk"
  ],
  "Tamil Nadu": [
    "Ambattur", "Ambur", "Ariyalur", "Arakkonam", "Avadi",
    "Chennai", "Chidambaram", "Coimbatore", "Coonoor", "Cuddalore",
    "Dharmapuri", "Dindigul", "Erode", "Gobichettipalayam", "Gudiyatham",
    "Hosur", "Jayankondam", "Kanchipuram", "Karaikudi", "Karur",
    "Krishnagiri", "Kumbakonam", "Madurai", "Manapparai", "Mayiladuthurai",
    "Mettur", "Nagapattinam", "Nagercoil", "Namakkal", "Neyveli",
    "Ooty", "Palani", "Pallavaram", "Panruti", "Pattukkottai",
    "Perambalur", "Pollachi", "Ponneri", "Pudukkottai", "Ramanathapuram",
    "Ranipet", "Salem", "Sankarankoil", "Sivaganga", "Sivakasi",
    "Srivilliputhur", "Tambaram", "Tenaksi", "Thanjavur", "Theni",
    "Thiruvaiyaru", "Thoothukudi", "Tiruchengode", "Tiruchirappalli", "Tirunelveli",
    "Tirupur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Udumalaipettai",
    "Vaniyambadi", "Vellakoil", "Vellore", "Viluppuram", "Virudhunagar"
  ],
  "Telangana": [
    "Adilabad", "Bhadrachalam", "Bellampalle", "Bhongir", "Bodhan",
    "Dubbak", "Gadwal", "Hyderabad", "Huzurabad", "Jagtial",
    "Jangaon", "Kagaznagar", "Kamareddy", "Karimnagar", "Khammam",
    "Kodad", "Korutla", "Kothagudem", "LB Nagar", "Mahabubabad",
    "Mahbubnagar", "Malkajgiri", "Mancherial", "Manuguru", "Medak",
    "Miryalaguda", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal",
    "Nizamabad", "Palwancha", "Parkal", "Patancheru", "Quthbullapur",
    "Ramagundam", "Sangareddy", "Sathupalli", "Secunderabad", "Serilingampally",
    "Siddipet", "Sircilla", "Suryapet", "Tandur", "Vikarabad",
    "Wanaparthy", "Warangal", "Yellandu", "Zaheerabad"
  ],
  "Tripura": [
    "Agartala", "Ambassa", "Bagma", "Bamancherra", "Belonia",
    "Birganj", "Bishalgarh", "Boxanagar", "Chawmanu", "Dharmanagar",
    "Gakulnagar", "Jirania", "Jogendranagar", "Jolaibari", "Kadamtala",
    "Kailasahar", "Kamalpur", "Kanchanpur", "Khowai", "Longtharai Valley",
    "Melaghar", "Mohanpur", "Panisagar", "Radhakishorepur", "Ranirbazar",
    "Sabroom", "Santirbazar", "Sonamura", "Teliamura", "Udaipur"
  ],
  "Uttar Pradesh": [
    "Agra", "Aligarh", "Amethi", "Ambedkar Nagar", "Amroha", "Auraiya",
    "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur",
    "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor",
    "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah",
    "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar",
    "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur",
    "Hardoi", "Hathras", "Jaunpur", "Jalaun", "Jhansi", "Jyotiba Phule Nagar",
    "Kannauj", "Kanpur", "Kanpur Dehat", "Kasganj", "Kaushambi", "Kheri",
    "Kushinagar", "Lakhimpur", "Lalitpur", "Lucknow", "Mahoba", "Mainpuri",
    "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar",
    "Noida", "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur",
    "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Sant Ravidas Nagar", "Shahjahanpur",
    "Shamli", "Shrawasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur",
    "Unnao", "Varanasi"
  ],
  "Uttarakhand": [
    "Almora", "Bageshwar", "Barkot", "Bazpur", "Berinag", "Champawat",
    "Dehradun", "Devprayag", "Dharchula", "Didihat", "Doiwala", "Dwarahat",
    "Gairsain", "Gangotri", "Gopeshwar", "Haridwar", "Haldwani", "Joshimath",
    "Karnaprayag", "Kashipur", "Kausani", "Khatima", "Kichha", "Kotdwar",
    "Lansdowne", "Manglaur", "Mussoorie", "Nainital", "Narendranagar", "Pauri",
    "Pithoragarh", "Ranikhet", "Rishikesh", "Roorkee", "Rudraprayag", "Sitarganj",
    "Srinagar", "Tehri", "Tanakpur", "Uttarkashi", "Vikasnagar"
  ],
  "West Bengal": [
    "Alipurduar", "Arambagh", "Asansol", "Baharampur", "Bally", "Balurghat",
    "Bankura", "Baranagar", "Barasat", "Barrackpore", "Basirhat", "Beldanga",
    "Bhadreswar", "Bhatpara", "Bidhannagar", "Birbhum", "Bolpur", "Bongaon",
    "Budge Budge", "Cooch Behar", "Dalkhola", "Darjeeling", "Durgapur", "Gangarampur",
    "Habra", "Haldia", "Howrah", "Islampur", "Jalpaiguri", "Jangipur",
    "Jhargram", "Kalyani", "Kalimpong", "Kamarhati", "Kanchrapara", "Katwa",
    "Kharagpur", "Kolkata", "Krishnanagar", "Malda", "Medinipur", "Murshidabad",
    "Nabadwip", "Naihati", "North Barrackpur", "North Dumdum", "Purulia",
    "Raiganj", "Rampurhat", "Ranaghat", "Sainthia", "Serampore", "Shantipur",
    "Siliguri", "Sonarpur", "South Dumdum", "Tamluk", "Uluberia"
  ]
};

document.getElementById("state-select").addEventListener("change", function () {
  const state = this.value;
  const citySelect = document.getElementById("city-select");
  citySelect.innerHTML = '<option value="" disabled selected>Select City*</option>';

  if (stateToCities[state]) {
    stateToCities[state].forEach(city => {
      const opt = document.createElement("option");
      opt.textContent = city;
      opt.value = city;
      citySelect.appendChild(opt);
    });
  }
});

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