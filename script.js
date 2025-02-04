try {
  let my_ip = await (await fetch("https://wtfismyip.com/json")).json();
  let ip_address = my_ip.YourFuckingIPAddress;
  let ip_data = await (await fetch(`https://uncors.vercel.app/?url=http://ip-api.com/json/${ip_address}`)).json();
  
  console.log(ip_data);
  console.log("ln 7 hit!");
} catch (error) {
  console.error("Error fetching data:", error);
}

function getRealLocation() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
}

async function getSimulatedLocation() {
    return ip_data.time_zone
}

async function detectVPN() {
    const real = getRealLocation()
    const simulated = await getSimulatedLocation()
    return {
        result: real == simulated,
        real,
        simulated
    }
}

function openForm() {
  console.log("Opened!");
  document.getElementById('formContainer').style.display = 'flex';
  document.body.classList.add('blurred'); // This will blur everything except the form
}

function closeForm() {
  document.getElementById('formContainer').style.display = 'none';
  document.body.classList.remove('blurred'); // This will remove the blur
}
async () => {
  console.log("41");
  if (await detectVPN().result) {
    console.log("VPN!!!!");
    while (await detectVPN().result) {
      alert("VPN detected! Please turn off your VPN.");
    }
  }
  const video = document.getElementById('video');
  const loading = document.getElementById('loading');
  const data = document.getElementById('data');
  const about = document.getElementById('about');
  const error = message => {
    loading.innerText = message;
    throw message
  }

  const pick = array => array[Math.floor(Math.random() * array.length)];
  const hacked_statements = [
    "Yes",
    "Certainly",
    "Definitely",
    "Absolutely",
  ]
  console.log("63 hit!");
  try {
    const memes = []
    const push = (tit, con, add) => memes.push(`${tit}: ${con}${add || ''}`)

    let step = 0

    let fontSize = Math.min(window.innerHeight / 10, window.innerWidth / 10);
    data.style.fontSize = `${fontSize}px`;


    const videoData = await fetch('https://files.catbox.moe/ymd50u.mp4').catch(error);
    video.src = URL.createObjectURL(await videoData.blob());
    video.load();
    console.log("Hit 77!!!");

    video.oncanplaythrough = async () => {
      console.log("Hit 79!!!")
      loading.style.display = 'none'
      start.style.display = 'flex'

      if (my_ip && ip_data) {
        push('IP Address', ip_data.query)
        push('Hostname', my_ip.YourFuckingHostname)
        push('Country', `${ip_data.country} (${ip_data.countryCode})`)
        push('Region', `${ip_data.regionName} (${ip_data.region})`)
        push('City', ip_data.city)
        push('Latitude', ip_data.lat)
        push('Longitude', ip_data.lon)
        push('ISP', my_ip.YourFuckingISP)
        push('Autonomous System', ip_data.as)
      } else {
        push('IP Address', '::ffff:172.70.126.134')
      }
      push('User Agent', navigator.userAgent)
      push('Connection Method', "GET")
      push('Request URL', "/")
      push('Request Path', "/")
      push('Request Protocol', "https")
      push('Secure Connection', false ? 'Yes' : 'No')
      push('Proxy IPs', '[]')
      push('User Language', 'English')
      push('Window Properties', Object.keys(window).length)
      push('Window Width', window.innerWidth, 'px')
      push('Window Height', window.innerHeight, 'px')
      push('Window Ratio', `${window.innerWidth / window.innerHeight}/1`)
      push('Screen Width', window.screen.availWidth, 'px')
      push('Screen Height', window.screen.availHeight, 'px')
      push('Screen Ratio', `${window.screen.availWidth / window.screen.availHeight}/1`)
      push('Screen Pixel Ratio', window.devicePixelRatio, '/1')
      push('Screen DPI', window.devicePixelRatio)
      push('Screen Color Depth', window.screen.colorDepth)
      push('Screen Orientation', `${window.screen.orientation.type} (${window.screen.orientation.angle}°)`)
      push('Screen Rotation', window.screen.orientation.angle)
      push('OS', `${navigator.platform}`)
      push('Available Browser Memory', typeof window.performance.memory != 'undefined' ? Math.round(window.performance.memory.jsHeapSizeLimit / 1024 / 1024) : null, 'MB');
      push('CPU Threads', `${navigator.hardwareConcurrency}`)
      const canvas = document.createElement('canvas');
      let gl;
      let debugInfo;
      try {
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      } catch (e) { }
      if (gl && debugInfo) {
        push('GPU Vendor', gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL));
        push('GPU Info', gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL));
        push('WebGL Version', gl.getParameter(gl.VERSION))
        push('WebGL Shading Language Version', gl.getParameter(gl.SHADING_LANGUAGE_VERSION))
        push('WebGL Vendor', gl.getParameter(gl.VENDOR))
      }
      push('Device Memory', `${navigator.deviceMemory}`)
      push('System Languages', navigator.languages.join(', '))
      push('Language', `${navigator.language}`)
      push('Possible Disease', 'Loser syndrome')
      let date = new Date()
      push('Current Time', `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`)
      if (ip_data) push('Timezone', ip_data.timezone)
      push('Timezone Offset', date.getTimezoneOffset() / 60, ' hours')
      push('Hacked', pick(hacked_statements))
      push('Current Status', 'Input your credit card number or get these details leaked!')
    }

    start.onclick = async () => {
      about.style.display = 'none'
      start.style.display = "none"
      //video.style.display = 'flex'
      video.play();
      setTimeout(function() {
        openForm()
      }, 42000);

      const interval = setInterval(() => {
        const time = video.currentTime - 1.4 - step * 60 / 90; // BPM
        if (step >= memes.length) step = -Infinity;
        if (step < 0) return clearInterval(interval);
        if (time >= 0) {
          if (step == 0) document.title = `this u??`
          const el = document.createElement('span');
          el.textContent = `${memes[step]}`
          const el2 = document.createElement('br');
          step++
          data.appendChild(el)
          data.appendChild(el2)
          const height = data.getBoundingClientRect().height
          if (height >= window.innerHeight) {
            fontSize *= 0.88
            data.style.fontSize = `${fontSize}px`
          }
        }
      }, 5)
    }

    video.onended = () => {
      video.style.display = 'none';
      step = -Infinity;
    }
  } catch (e) {
    error(`${e.message}`)
  }
}
function isValidCreditCardNumber(cardNumber) {
  if (typeof cardNumber !== 'string') {
    return false;
  }

  cardNumber = cardNumber.replace(/\D/g, ''); // Remove all non-digit characters

  if (cardNumber.length < 13 || cardNumber.length > 19) {
    return false; // Invalid length
  }

  let sum = 0;
  let shouldDouble = false;

  // Start from the rightmost digit and process each digit
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i]);

    if (shouldDouble) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble; // Alternate doubling
  }

  return (sum % 10) === 0; // Return true if sum is a multiple of 10
}

function validate(cardnum) {
  valid = isValidCreditCardNumber(cardnum)
  if (valid) {
    alert("Valid!")
    closeform()
  } else {
    alert("Invalid credit card number. Details will get leaked to doxbin.net")
  }
}
