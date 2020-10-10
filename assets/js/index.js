const Data = new Map();


const background = () => {
    let isWhite = Data.get("backgroundColor");

    if (isWhite) {
        document.querySelector("body").style.backgroundColor = "#000000";
        document.getElementById("headTitle").style.color = "#FFFFFF";
        Data.set("backgroundColor", !isWhite);
    } else {
        document.querySelector("body").style.backgroundColor = "#FFFFFF";
        document.getElementById("headTitle").style.color = "#000000";
        Data.set("backgroundColor", !isWhite);
    }
};

const showDiscord = () => {
    document.getElementById("discord").remove();
    document.getElementById("specialDiscord").innerText = "Discord : hanifdwypoetra#7343";
    setTimeout(() => {
        window.location.reload();
    }, 5000);
};

const waktuJalan = () => {
    const hari = new Date().getDay();
    const bulan = new Date().getMonth();
    const tahun = new Date().getFullYear();

    const jam = new Date().getHours(),
          mnt = new Date().getMinutes(),
          sec = new Date().getSeconds();

    document.querySelectorAll("footer")[0].innerHTML = `[${hari}/${bulan}/${tahun.toString().slice(0, 2)}]: ${jam.toString().length == 1 ? "0" + jam : jam}:${mnt.toString().length == 1 ? "0" + mnt : mnt}:${sec.toString().length == 1 ? "0" + sec : sec}`;

};

setInterval(waktuJalan, 1000);

// Visit checker

const cacheVisit = window.localStorage.getItem("cacheVisit");
if (!cacheVisit) {
    window.localStorage.setItem("cacheVisit", JSON.stringify({
        count: 1,
        user: {
            pl: navigator.platform,
            ag: navigator.userAgent,
            app: {
                name: navigator.appName,
                version: navigator.appVersion,
                code: navigator.appCodeName
            }
        }
    }));
    console.log("[LOCAL_STORAGE]: Saved");
} else {
    window.localStorage.setItem("cacheVisit", JSON.stringify({
        count: JSON.parse(cacheVisit).count + 1,
        user: {
            pl: navigator.platform,
            ag: navigator.userAgent,
            app: {
                name: navigator.appName,
                version: navigator.appVersion,
                code: navigator.appCodeName
            }
        }
    }));
    console.log("[LOCAL_STORAGE]: Updated visited count");
}