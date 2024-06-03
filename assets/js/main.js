let data = {
    licniAsistent: [
      {
        title: "Special Bonuses",
        desc: "Gain access to special promotions and bonuses, including, deposit bonuses, free spins, and more.",
        image: "assets/icons/icon-1.svg"
      },
    ],
    specijalniBonusi: [
      {
        title: "Weekly Cashback Rewards",
        desc: "Enjoy increased cashback on your weekly losses, ensuring you always get the most out of your gameplay.",
        image: "assets/icons/icon-2.svg"
      },
    ],
    limiti: [
        {
          title: "Surprising Daily Cashback ",
          desc: "Receive a surprise cashback on your net losses from the previous day.",
          image: "assets/icons/icon-3.svg"
        },
      ],
      // rezervacijeAvion: [
      //   {
      //     title: "REZERVACIJE AVIONSKIH KARATA",
      //     desc: "Samo jedan upit je dovoljan – omogućavamo brzu i efikasnu avionsku rezervaciju za VIP klijente.",
      //     image: "assets/icons/icon-4.svg"
      //   },
      // ],
      // rezervacijeUlaznice: [
      //   {
      //     title: "REZERVACIJE ULAZNICA",
      //     desc: "Pružamo privilegovanu mogućnost rezervacije ulaznica za VIP klijente - pošaljite upit i garantujemo vam mesto.",
      //     image: "assets/icons/icon-5.svg"
      //   },
      // ],
      // dodatneNagrade: [
      //   {
      //     title: "DODATNE NAGRADE",
      //     desc: "Nadmašujemo vaša očekivanja. Budite spremni za nova iznenađenja i nagrade koje će vas očarati.",
      //     image: "assets/icons/icon-6.svg"
      //   },
      // ],
      // rankingSystem: {
      //   silver: {
      //     head : "VIP SILVER",
      //     deposit: "deposit",
      //     prise:" 50.000 rsd - 99.999 rsd",
      //     bulletOne: "Mesečni bonusi ",
      //     bulletTwo: "Rakeback ",
      //     bulletThree: "Nedeljni bonusi"
      //   },
      //   gold: {
      //     head : "VIP GOLD",
      //     deposit: "deposit",
      //     prise:" 100.000 rsd - 249.999 rsd",
      //     bulletOne: "Nedeljni cashback ",
      //     bulletTwo: "Mesečni bonus paketi ",
      //     bulletThree: "Rakeback",
      //     bulletFour: "Nedeljni bonusi"
      //   },
      //   platinum: {
      //     head : "VIP PLATINUM",
      //     deposit: "deposit",
      //     prise:" > 250.000 rsd",
      //     bulletOne: "Nedeljni cashback ",
      //     bulletTwo: "Mesečni bonus paketi ",
      //     bulletThree: "Rakeback",
      //     bulletFour: "Nedeljni bonusi",
      //     bulletFive: "Rast bonusa"
      //   },
        
      // }
  };
  /*POPUP*/
  function generateHTML(contentData, id) {
    return `<div class="popup-box" id="${id}">
  <img class="popup-icon" src="${contentData.image}"/>
      <h2 class="about-naslov">${contentData.title}</h2>
      <p>${contentData.desc}</p>
    </div>`;
  }
  

  function renderContent(content, id, buttonClass) {
    const popup = document.querySelector(".popup-active");
    const popupContent = document.querySelector(".popup-content-active");
  
    document.querySelector(`.${buttonClass}`).addEventListener("click", function (event) {
      event.preventDefault();
  
      if (popup.classList.contains("show")) {
        return;
      }
  
      popup.style.display = "block";
      popupContent.style.display = "flex";
  
      let contentData = data[content][0];
      let contentHTML = generateHTML(contentData, id);
      popupContent.innerHTML = contentHTML;
  
      var closeBtn = document.createElement("img");
      closeBtn.id = "close-btn";
      closeBtn.src = "assets/icons/CLOSE-03 1.png"; 
      popupContent.appendChild(closeBtn);
  
      closeBtn.addEventListener("click", function (event) {
        event.stopPropagation();
  
        setTimeout(function() {
          popup.style.display = "none";
        }, 300);
  
        setTimeout(function() {
          popup.classList.remove("show");
          popupContent.classList.remove("show");
        }, 10);
      });
  
      setTimeout(function() {
        popup.classList.add("show");
        popupContent.classList.add("show");
      }, 10);
    });
  
    popup.addEventListener("click", function () {
      setTimeout(function() {
        popup.style.display = "none";
      }, 300);
  
      setTimeout(function() {
        popup.classList.remove("show");
        popupContent.classList.remove("show");
      }, 10);
    });
  
    popupContent.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }

  
  document.addEventListener("DOMContentLoaded", function () {
    renderContent("licniAsistent", "licniAsistent", "asisstent-btn");
    renderContent("specijalniBonusi", "specijalniBonusi", "bonus-btn");
    renderContent("limiti", "limiti", "limit-btn");
    renderContent("rezervacijeAvion", "rezervacijeAvion", "rezervacije-btn");
    renderContent("rezervacijeUlaznice", "rezervacijeUlaznice", "ulaznice-btn");
    renderContent("dodatneNagrade", "dodatneNagrade", "nagrade-btn");
  });

  function generateHTMLRanking(rankingData) {
    let html = '';
    
    for (let rank in rankingData) {
      html += `<div class="box">
        <div class="head"><h4>${rankingData[rank].head}</h4></div>
        <div class="body-box">
        <div class="prise"><p>${rankingData[rank].prise}</p></div>
        <div class="deposit"><p>${rankingData[rank].deposit}</p></div>
        <div class="list">
        <ul>`;
      
  
      if (rankingData[rank].bulletOne !== undefined) {
        html += `<li class="list-box"><img src="/vip/assets/icons/bullet.svg" alt="Icon">${rankingData[rank].bulletOne}</li>`;
      }
      if (rankingData[rank].bulletTwo !== undefined) {
        html += `<li class="list-box"><img src="/vip/assets/icons/bullet.svg" alt="Icon">${rankingData[rank].bulletTwo}</li>`;
      }
      if (rankingData[rank].bulletThree !== undefined) {
        html += `<li class="list-box"><img src="/vip/assets/icons/bullet.svg" alt="Icon">${rankingData[rank].bulletThree}</li>`;
      }
      if (rankingData[rank].bulletFour !== undefined) {
        html += `<li class="list-box"><img src="/vip/assets/icons/bullet.svg" alt="Icon">${rankingData[rank].bulletFour}</li>`;
      }
      if (rankingData[rank].bulletFive !== undefined) {
        html += `<li class="list-box"><img src="/vip/assets/icons/bullet.svg" alt="Icon">${rankingData[rank].bulletFive}</li>`;
      }
      
      html += `</ul></div>
        </div>
      </div>`;
    }
    
    return html;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const rankingSystemContainer = document.querySelector(".ranking-system");
  
    rankingSystemContainer.innerHTML = generateHTMLRanking(data.rankingSystem);
  });
  