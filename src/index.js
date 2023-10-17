const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const navA = document.querySelectorAll("header nav a");

for (let i = 0; i < navA.length; i++) {
  navA[i].className = "italic";
}

const aIcerik = Object.values(siteContent.nav);

for (let i = 0; i < navA.length; i++) {
  navA[i].textContent = aIcerik[i];
}

const headerImg = document.getElementById("logo-img");

headerImg.setAttribute("src", siteContent.images["logo-img"]);

// headerImg.src= "../mocks/img/logo.png";

const newHeader = document.querySelector("div h1");
newHeader.textContent = siteContent.cta.h1;

const newButton = document.querySelector(".cta-text button");

newButton.textContent = siteContent.cta.button;

const newAttribute = document.querySelector(".cta img");

newAttribute.setAttribute("src", siteContent.images["cta-img"]);

const textContentH4 = document.querySelectorAll(".text-content h4");
const textContentP = document.querySelectorAll(".text-content p");
for (let i = 0; i < textContentH4.length; i++) {
  textContentH4[i].textContent = Object.values(siteContent["ana-içerik"])[
    2 * i
  ];

  textContentP[i].textContent = Object.values(siteContent["ana-içerik"])[
    2 * i + 1
  ];
}
const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent.images["accent-img"];
// let myarr = [];
// for (let h4 in siteContent["ana-içerik"]) {
//   if (h4.includes("h4")) {
//     myarr.push(siteContent["ana-içerik"][h4]);
//   }
// }
// console.log(myarr);

const constactH4 = document.querySelector(".contact h4");
constactH4.textContent = siteContent.iletisim["iletişim-h4"];
console.log(textContentH4[0]);

const contactP = document.querySelectorAll(".contact p");

for (let i = 0; i < contactP.length; i++) {
  contactP[i].textContent = Object.values(siteContent.iletisim)[i + 1];
}

const aFooter = document.querySelector("footer a");

aFooter.textContent = siteContent.footer.copyright;
aFooter.className = "bold";
console.log(Object.values(siteContent.iletisim));