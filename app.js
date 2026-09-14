const SHOP = "https://www.vacuumsrus.com";

const machines = {
  generic: {
    brand: "Generic",
    name: "Generic / universal machine",
    description: "Simplified guidance for most domestic machines",
    image: "",
    manual: ""
  },

  tm16: {
    brand: "Janome",
    name: "Janome Travel Mate 16",
    description: "TM16 mechanical sewing machine",
    image:
      "https://130337649.cdn6.editmysite.com/uploads/1/3/0/3/130337649/ZZMSYZHPT4V7JVQKC2ZD6WX2.jpeg",
    manual: "https://www.janome.com/support/manuals/"
  },

  "5300qdc": {
    brand: "Janome",
    name: "Janome 5300QDC",
    description: "Computerized sewing and quilting machine",
    image:
      "https://le-cdn.hibuwebsites.com/585e27d025d5416da034c3930d8371bf/dms3rep/multi/opt/5300QDC-CMYK-300DPI-1920w.jpg",
    manual: "https://www.janome.com/support/manuals/"
  },

  m8: {
    brand: "Janome",
    name: "Janome Continental M8 Professional",
    description: "Advanced computerized sewing and quilting machine",
    image:
      "https://woodseatssewingmachinesshop.co.uk/cdn/shop/files/M8_Right.jpg?v=1778681236",
    manual: "https://www.janome.com/support/manuals/"
  }
};

const products = {
  needles: [
    {
      icon: "🪡",
      name: "Universal needles",
      detail: "A fresh 80/12 is a good test needle",
      query: "universal sewing machine needles"
    },
    {
      icon: "🧵",
      name: "Specialty needles",
      detail: "Stretch, jersey, denim, and more",
      query: "sewing machine needles"
    }
  ],

  thread: [
    {
      icon: "🧵",
      name: "All-purpose thread",
      detail: "Use smooth, good-quality thread for testing",
      query: "sewing thread"
    },
    {
      icon: "◉",
      name: "Bobbins",
      detail: "Match the bobbin style to your machine",
      query: "Janome bobbins"
    }
  ],

  cleaning: [
    {
      icon: "🖌️",
      name: "Machine cleaning tools",
      detail: "Brush lint out of the hook area",
      query: "sewing machine cleaning brush"
    },
    {
      icon: "💧",
      name: "Sewing machine oil",
      detail: "Only use where your manual specifically directs",
      query: "sewing machine oil"
    },
    {
      icon: "↗",
      name: "Precision tweezers",
      detail: "Useful for removing loose thread and lint",
      url:
        `${SHOP}/product/sewing/notions/nifty-notions/` +
        "nifty-notions-6-tweezers/"
    }
  ],

  restock: [
    {
      icon: "🪡",
      name: "Pins and clips",
      detail: "Keep layers secure and seams tidy",
      query: "sewing pins clips"
    },
    {
      icon: "🧵",
      name: "Thread",
      detail: "Restock dependable everyday colors",
      query: "sewing thread"
    },
    {
      icon: "✂️",
      name: "Cutting tools",
      detail: "Scissors, snips, and rotary supplies",
      query: "sewing scissors rotary cutter"
    }
  ]
};

const visuals = {
  threading: {
    image:
      "https://i.postimg.cc/FRMt22X4/" +
      "Janome-4623-LE-Plus-Sewing-Machine-How-to-thread.jpg",
    alt: "Janome upper threading path example",
    caption:
      "Threading paths vary by model. Use this as a visual reference, " +
      "then follow the numbered path printed on your machine or open " +
      "its Janome manual."
  },

  needle: {
    image:
      "https://i.postimg.cc/BZ1Q67mj/" +
      "How-To-Thread-A-Janome-5124-Sewing-Machine.jpg",
    alt: "Janome needle and needle-threading area",
    caption:
      "The close-up in your model manual shows the correct needle " +
      "direction and needle-bar guide."
  },

  bobbin: {
    image:
      "https://hookedonsewing.com/wp-content/uploads/" +
      "Bobbin-Insert-04.jpg",
    alt: "Correct and incorrect Janome top-loading bobbin insertion",
    caption:
      "Top-loading Janome example: the thread must follow the marked " +
      "bobbin-holder path. Your machine’s arrows are the final authority."
  },

  cleaning: {
    image:
      "https://i.etsystatic.com/36996368/r/il/31f9f2/" +
      "5285599819/il_570xN.5285599819_mvsc.jpg",
    alt: "Janome hook race and feed dog cleaning diagram",
    caption:
      "Janome hook-area reference. Parts differ between models, so " +
      "remove only the pieces your own manual instructs you to remove."
  },

  materials: {
    image:
      "https://cdn11.bigcommerce.com/s-73akfx6mlz/" +
      "product_images/uploaded_images/" +
      "sewing-machine-diagram-janome-front-load.png",
    alt: "Labeled Janome sewing machine needle and hook area",
    caption:
      "Needle, hook, and feed components work together to form a stitch. " +
      "The correct needle helps the hook catch the thread loop consistently."
  }
};

const steps = [
  {
    id: "rethread",
    title: "Completely rethread the machine",
    intro:
      "A thread can look correct while sitting outside a tension disc " +
      "or missing the take-up lever. Starting over is the most reliable " +
      "first check.",
    visual: "threading",
    instructions: [
      "Turn the machine off, raise the presser foot, and bring the needle and take-up lever to their highest position.",
      "Clip the thread near the spool and pull the remaining thread forward through the needle. Do not drag it backward through the tension system.",
      "Replace the spool and correctly sized spool cap, if your machine uses one.",
      "Follow every numbered upper-thread guide in order, including the take-up lever and needle-bar guide.",
      "Thread the needle in the direction shown for your model, place the thread under the foot, and pull it toward the back."
    ],
    tipTitle: "Keep the presser foot raised",
    tip:
      "Raising it opens the tension discs. Threading with the foot down " +
      "can leave the thread sitting outside them.",
    warning:
      "Turn the machine off before putting your hands near the needle.",
    products: "thread"
  },

  {
    id: "needle",
    title: "Install a brand-new needle",
    intro:
      "A needle can be dull, bent, burred, or damaged without looking " +
      "obviously wrong. Replacing it rules out several common causes at once.",
    visual: "needle",
    instructions: [
      "Turn the machine off and raise the needle to its highest position.",
      "Place a scrap of fabric or paper over the needle plate so the old needle cannot fall inside the machine.",
      "Loosen the needle-clamp screw and remove the old needle.",
      "For the cotton test sample, choose a new universal 80/12 needle.",
      "With the flat side facing the correct direction, push the needle fully upward and tighten the clamp securely.",
      "Rethread the needle and test again."
    ],
    tipTitle: "New really means new",
    tip:
      "Do not reinstall the original needle just because it appears straight.",
    warning:
      "For most current Janome home machines, the flat side faces the " +
      "back and the needle is threaded from front to back. Check the " +
      "model manual if uncertain.",
    products: "needles"
  },

  {
    id: "bobbin",
    title: "Remove and reinsert the bobbin",
    intro:
      "The machine may skip stitches when the bobbin is backward, " +
      "the wrong style, unevenly wound, or outside its tension guide.",
    visual: "bobbin",
    instructions: [
      "Turn the machine off, raise the needle, and remove the bobbin cover and bobbin.",
      "Confirm the bobbin is evenly wound and is the exact type recommended for the machine.",
      "Insert it in the direction shown by the arrows beside the bobbin holder.",
      "Hold the bobbin in place and draw the thread completely through the slit and under the bobbin tension guide.",
      "Reinstall the cover and place both thread tails beneath the foot and toward the back, when applicable."
    ],
    tipTitle: "Similar is not always compatible",
    tip:
      "Bobbins with slightly different heights or curves may fit in the " +
      "opening but sew poorly.",
    warning:
      "Do not force the bobbin holder or remove pieces not covered in " +
      "your user manual.",
    products: "thread"
  },

  {
    id: "materials",
    title: "Match the needle to your fabric",
    intro:
      "A mismatched needle may deflect or fail to create the thread loop " +
      "the hook needs to catch.",
    visual: "materials",
    instructions: [
      "Test two layers of ordinary woven cotton with a new universal 80/12 needle.",
      "If cotton works but your project does not, identify whether the project fabric is knit, stretchy, delicate, dense, or heavy.",
      "Use a ballpoint or jersey needle for common knits, a stretch needle for highly elastic fabric, or a denim needle for dense denim.",
      "Make sure the thread moves freely through the eye and is not too heavy for the needle.",
      "Test the project again using an appropriate new needle."
    ],
    tipTitle: "The test result tells us something",
    tip:
      "If woven cotton sews correctly, the machine probably needs a " +
      "different needle or setup for the project fabric rather than repair.",
    warning: "",
    products: "needles"
  },

  {
    id: "clean",
    title: "Clean the bobbin and hook area",
    intro:
      "Lint and broken thread can prevent smooth thread movement around " +
      "the bobbin holder and hook.",
    visual: "cleaning",
    instructions: [
      "Turn the machine off and unplug it.",
      "Remove the presser foot, needle, bobbin cover, and bobbin.",
      "Remove the needle plate and bobbin holder only if your model manual directs you to do so.",
      "Use a small lint brush to sweep lint out and away from the feed dogs, bobbin holder, and hook area.",
      "Remove loose thread carefully, then reinstall every part in the correct position.",
      "Install a new needle, rethread the machine, and test."
    ],
    tipTitle: "Brush instead of blowing",
    tip:
      "Compressed air or blowing by mouth can push lint and moisture " +
      "farther into the machine.",
    warning:
      "Do not add oil unless your exact model manual specifically tells " +
      "you where and how to oil it.",
    products: "cleaning"
  },

  {
    id: "settings",
    title: "Reset to a basic straight stitch",
    intro:
      "A specialty mode, incompatible foot, shifted needle position, " +
      "or unusual setting can sometimes resemble a mechanical problem.",
    visual: "materials",
    instructions: [
      "Select an ordinary center-position straight stitch.",
      "Set the stitch length near 2.4–2.5 mm and return the upper tension to its normal range.",
      "Install the standard all-purpose or zigzag foot.",
      "Turn off specialty modes for twin needles, quilting, or special accessories.",
      "On the Continental M8, confirm the installed needle plate and foot are compatible with the selected stitch.",
      "Test slowly on two layers of woven cotton."
    ],
    tipTitle: "Keep the test basic",
    tip:
      "A successful straight-stitch test helps separate a machine problem " +
      "from a specialty setting or accessory problem.",
    warning: "",
    products: ""
  }
];

const modelNotes = {
  generic: {
    rethread:
      "Follow the arrows or numbered guides printed directly on your machine.",
    bobbin:
      "Use the diagram printed beside your bobbin area to confirm direction."
  },

  tm16: {
    rethread:
      "TM16: raise the take-up lever completely, then follow the front " +
      "channel down, around, and back through the take-up lever.",
    bobbin:
      "TM16: follow the top-loading bobbin arrows and pull the thread " +
      "fully through the slit."
  },

  "5300qdc": {
    rethread:
      "5300QDC: raise the presser foot and complete the numbered thread " +
      "path before using the built-in needle threader.",
    bobbin:
      "5300QDC: hold the top-loading bobbin while drawing the thread " +
      "through the slit and guide path."
  },

  m8: {
    rethread:
      "Continental M8: raise the presser foot and follow every numbered " +
      "guide before using the automatic needle threader.",
    bobbin:
      "Continental M8: follow the arrows around the top-loading bobbin " +
      "holder and use the built-in thread cutter as directed."
  }
};

const state = {
  brand: null,
  machine: null,
  issue: null,
  step: 0,
  attempts: []
};

const $ = (id) => document.getElementById(id);

const screens = [
  ...document.querySelectorAll(".screen")
];

function showScreen(id) {
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === id);
  });

  const inGuide = [
    "issue",
    "setup",
    "troubleshooting",
    "success",
    "service"
  ].includes(id);

  $("machinePill").classList.toggle(
    "hidden",
    !inGuide || !state.machine
  );

  $("changeMachineButton").classList.toggle(
    "hidden",
    !inGuide
  );

  $("progressArea").classList.toggle(
    "hidden",
    id !== "troubleshooting"
  );

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function chooseMachine(id) {
  state.machine = id;
  $("machinePill").textContent = machines[id].name;
  showScreen("issue");
}

function resetGuide() {
  state.issue = null;
  state.step = 0;
  state.attempts = [];

  $("setupCheck").checked = false;
  $("beginSteps").disabled = true;
}

function resetAll() {
  state.brand = null;
  state.machine = null;

  resetGuide();
  showScreen("welcome");
}

function imageWithFallback(src, alt) {
  return `
    <img
      src="${src}"
      alt="${alt}"
      loading="lazy"
      referrerpolicy="no-referrer"
      onerror="
        this.parentElement.innerHTML =
        '<div class=&quot;image-fallback&quot;>' +
        '<b>Image unavailable</b><br>' +
        'Open your model manual for the exact diagram.' +
        '</div>'
      "
    >
  `;
}

function renderModels() {
  const modelIds = [
    "tm16",
    "5300qdc",
    "m8"
  ];

  $("modelGrid").innerHTML = modelIds.map((id) => {
    const machine = machines[id];

    return `
      <button
        class="model-card"
        data-machine="${id}"
        type="button"
      >
        <div class="model-image">
          ${imageWithFallback(machine.image, machine.name)}
        </div>

        <div class="model-copy">
          <b>${machine.name}</b>
          <span>${machine.description}</span>
        </div>
      </button>
    `;
  }).join("");

  document.querySelectorAll("[data-machine]").forEach((button) => {
    button.addEventListener("click", () => {
      chooseMachine(button.dataset.machine);
    });
  });
}

function shopUrl(item) {
  if (item.url) {
    return item.url;
  }

  return (
    `${SHOP}/?s=${encodeURIComponent(item.query)}` +
    "&post_type=product"
  );
}

function productCards(productList) {
  return productList.map((product) => {
    return `
      <a
        class="product-card"
        href="${shopUrl(product)}"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="product-emoji">
          ${product.icon}
        </span>

        <b>${product.name}</b>
        <small>${product.detail}</small>
        <strong>Shop at Vacuums R Us →</strong>
      </a>
    `;
  }).join("");
}

function renderStep() {
  const currentStep = steps[state.step];

  const percentage = Math.round(
    ((state.step + 1) / steps.length) * 100
  );

  $("progressText").textContent =
    `Step ${state.step + 1} of ${steps.length}`;

  $("progressPercent").textContent =
    `${percentage}%`;

  $("progressFill").style.width =
    `${percentage}%`;

  $("stepKicker").textContent =
    `Skipping stitches · ${machines[state.machine].name}`;

  $("stepTitle").textContent =
    currentStep.title;

  $("stepIntro").textContent =
    currentStep.intro;

  $("stepNumber").textContent =
    state.step + 1;

  const notes =
    modelNotes[state.machine] || modelNotes.generic;

  const instructions = [
    ...currentStep.instructions
  ];

  if (notes[currentStep.id]) {
    instructions.splice(
      1,
      0,
      notes[currentStep.id]
    );
  }

  $("instructionList").innerHTML =
    instructions.map((instruction) => {
      return `<li>${instruction}</li>`;
    }).join("");

  $("tipTitle").textContent =
    currentStep.tipTitle;

  $("tipText").textContent =
    currentStep.tip;

  $("warningBox").classList.toggle(
    "hidden",
    !currentStep.warning
  );

  $("warningText").textContent =
    currentStep.warning;

  const visual =
    visuals[currentStep.visual];

  const manualLink =
    machines[state.machine].manual
      ? `
        <a
          href="${machines[state.machine].manual}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find the official Janome manual ↗
        </a>
      `
      : "";

  $("visualArea").innerHTML = `
    ${imageWithFallback(visual.image, visual.alt)}

    <div class="visual-caption">
      ${visual.caption}
      ${manualLink}
    </div>
  `;

  if (currentStep.products) {
    $("productShelf").innerHTML = `
      <div class="shelf-heading">
        <div>
          <span class="kicker">Need supplies?</span>
          <h3>Shop this fix</h3>
        </div>
      </div>

      <div class="shop-grid">
        ${productCards(products[currentStep.products])}
      </div>
    `;

    $("productShelf").classList.remove("hidden");
  } else {
    $("productShelf").classList.add("hidden");
  }

  $("previousStep").style.visibility =
    state.step > 0 ? "visible" : "hidden";

  showScreen("troubleshooting");
}

function record(result) {
  const currentStep = steps[state.step];

  const existingIndex =
    state.attempts.findIndex((attempt) => {
      return attempt.id === currentStep.id;
    });

  const attempt = {
    id: currentStep.id,
    title: currentStep.title,
    result
  };

  if (existingIndex >= 0) {
    state.attempts[existingIndex] = attempt;
  } else {
    state.attempts.push(attempt);
  }
}

function nextStep() {
  if (state.step < steps.length - 1) {
    state.step += 1;
    renderStep();
  } else {
    renderService();
  }
}

function createSummary() {
  const completedSteps = state.attempts
    .filter((attempt) => {
      return attempt.result === "Not fixed";
    })
    .map((attempt) => {
      return `• ${attempt.title}`;
    });

  const incompleteSteps = state.attempts
    .filter((attempt) => {
      return attempt.result === "Could not complete";
    })
    .map((attempt) => {
      return `• ${attempt.title}`;
    });

  const lines = [
    "SEWING MACHINE TROUBLESHOOTING SUMMARY",
    "",
    `Machine: ${machines[state.machine].name}`,
    "Issue: Skipping stitches",
    "",
    "Completed without fixing the issue:",
    ...(
      completedSteps.length
        ? completedSteps
        : ["• None recorded"]
    )
  ];

  if (incompleteSteps.length) {
    lines.push(
      "",
      "Could not complete:",
      ...incompleteSteps
    );
  }

  lines.push(
    "",
    "Result: The machine is still skipping stitches after guided troubleshooting."
  );

  return lines.join("\n");
}

function renderService() {
  const text = createSummary();

  $("summaryText").textContent = text;
  $("summaryField").value = text;

  showScreen("service");
}

function createFullRequest() {
  const customerName =
    $("customerName").value.trim() || "Not provided";

  const customerEmail =
    $("customerEmail").value.trim() || "Not provided";

  const customerPhone =
    $("customerPhone").value.trim() || "Not provided";

  const customerStore =
    $("customerStore").value || "Not selected";

  const customerDetails =
    $("customerDetails").value.trim() || "None provided";

  return [
    "SEWING MACHINE SERVICE REQUEST",
    "",
    `Name: ${customerName}`,
    `Email: ${customerEmail}`,
    `Phone: ${customerPhone}`,
    `Preferred store: ${customerStore}`,
    "",
    createSummary(),
    "",
    "ADDITIONAL DETAILS",
    customerDetails
  ].join("\n");
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    window.prompt(
      "Copy the text below:",
      text
    );
  }

  $("copyNotice").classList.remove("hidden");

  window.setTimeout(() => {
    $("copyNotice").classList.add("hidden");
  }, 2200);
}

document
  .querySelectorAll("[data-screen]")
  .forEach((button) => {
    button.addEventListener("click", () => {
      showScreen(button.dataset.screen);
    });
  });

document
  .querySelectorAll("[data-brand]")
  .forEach((button) => {
    button.addEventListener("click", () => {
      state.brand = button.dataset.brand;

      if (state.brand === "janome") {
        showScreen("model");
      } else {
        chooseMachine("generic");
      }
    });
  });

$("startButton").addEventListener("click", () => {
  showScreen("brand");
});

$("homeButton").addEventListener("click", () => {
  resetAll();
});

$("changeMachineButton").addEventListener("click", () => {
  state.machine = null;
  resetGuide();
  showScreen("brand");
});

$("issueBack").addEventListener("click", () => {
  if (state.brand === "janome") {
    showScreen("model");
  } else {
    showScreen("brand");
  }
});

document
  .querySelector("[data-issue='skipping']")
  .addEventListener("click", () => {
    state.issue = "skipping";
    state.step = 0;
    state.attempts = [];

    showScreen("setup");
  });

$("setupCheck").addEventListener("change", () => {
  $("beginSteps").disabled =
    !$("setupCheck").checked;
});

$("beginSteps").addEventListener("click", () => {
  renderStep();
});

$("previousStep").addEventListener("click", () => {
  if (state.step > 0) {
    state.step -= 1;
    renderStep();
  }
});

$("fixedButton").addEventListener("click", () => {
  record("Fixed");

  $("successText").textContent =
    `${machines[state.machine].name} completed the test ` +
    "without skipping stitches.";

  $("successfulStep").textContent =
    steps[state.step].title;

  $("restockGrid").innerHTML =
    productCards(products.restock);

  showScreen("success");
});

$("nextButton").addEventListener("click", () => {
  record("Not fixed");
  nextStep();
});

$("cantButton").addEventListener("click", () => {
  record("Could not complete");
  nextStep();
});

$("anotherIssue").addEventListener("click", () => {
  resetGuide();
  showScreen("issue");
});

$("copySummary").addEventListener("click", () => {
  copyText(createSummary());
});

$("copyRequest").addEventListener("click", () => {
  copyText(createFullRequest());
});

$("requestForm").addEventListener("submit", (event) => {
  event.preventDefault();
});

$("previewEmail").addEventListener("click", () => {
  $("emailPreview").value =
    createFullRequest();

  $("emailDialog").showModal();
});

$("closeDialog").addEventListener("click", () => {
  $("emailDialog").close();
});

$("copyEmail").addEventListener("click", () => {
  copyText($("emailPreview").value);
});

$("openEmail").addEventListener("click", () => {
  const subject =
    `Sewing machine service request — ` +
    machines[state.machine].name;

  const body =
    createFullRequest();

  window.location.href =
    `mailto:?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;
});

$("emailDialog").addEventListener("click", (event) => {
  if (event.target === $("emailDialog")) {
    $("emailDialog").close();
  }
});

renderModels();
