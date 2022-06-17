<template>
  <div id="app">
    <Background v-bind:url="data.background" />
    <div id="nav">
      <div id="nav-left">
        <router-link to="/">Sciuridae Li</router-link>
      </div>
      <div id="nav-right">
        <a href="https://blog.sciuridae.me">Blog</a>&nbsp;&nbsp;
        <router-link v-if="data.bike.show" to="/bike">Bike</router-link
        >&nbsp;&nbsp; <router-link to="/works">Works</router-link>&nbsp;&nbsp;
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
    <div id="content">
      <router-view v-on:click="clickListener" v-bind:data="data" />
    </div>
  </div>
</template>
<script>
import Background from "@/components/Background.vue";

export default {
  components: {
    Background,
  },
  methods: {
    clickListener(name) {
      if (name == "bike") {
        this.data.bike.clickCount++;
        if (this.data.bike.clickCount > 2) {
          this.data.bike.show = true;
          this.$router.push("/bike");
        }
      }
    },
  },
  data() {
    return {
      data: {
        bike: {
          show: false,
          clickCount: 0,
          bike: {
            title: "我ㄉ車車 My Bike",
            icon: "motorcycle",
            items: [
              {
                name: "SUZUKI GSX-R150 2019",
                description: "\\車車/",
                image: "assets/bike/bike-r150.jpg",
                width: "60vw",
              },
            ],
          },
          equipment: {
            title: "我ㄉ裝備 My Equipment",
            icon: "tshirt",
            items: [
              {
                name: "HJC CL17 Striker Mc1h",
                description: "",
                image: "assets/bike/helmet.png",
                width: "60vw",
              },
              {
                name:
                  "Alpinestar	Stricker Air Pants / Alpinestar Axel Air Jacket",
                description: "",
                image: "assets/bike/alpinstar-textile.jpg",
                icon: "pants",
                width: "60vw",
              },
              {
                name: "Revit Triton Suit / Revit Quantum Suit",
                description: "",
                image: "assets/bike/suits.jpg",
                width: "60vw",
              },
              {
                name: "Alpinestars GP Plus Black/White",
                description: "",
                image: "assets/bike/gloves.jpg",
                width: "60vw",
              },
              {
                name: "Alpinestars Supertech R",
                description: "",
                image: "assets/bike/boots.webp",
                width: "60vw",
              },
              {
                name: "SJCAM SJ8 Pro",
                description: "",
                icon: "video",
                width: "60vw",
              },
              {
                name: "GoPro Hero 5",
                description: "",
                icon: "video",
                width: "60vw",
              },
            ],
          },
        },
        contact: {
          title: "Contact 聯絡我",
          icon: "address-book",
          items: [
            {
              name: "Telegram",
              href: "https://t.me/Sciuridae",
              icon: ["fab", "telegram"],
            },
            {
              name: "Mail",
              href: "mailto:sciuridae0603@gmail.com",
              icon: ["fas", "envelope"],
            },
            {
              name: "Facebook",
              href: "https://fb.me/sciuridae.li",
              icon: ["fab", "facebook"],
            },
            {
              name: "GitHub",
              href: "https://github.com/Sciuridae0603",
              icon: ["fab", "github"],
            },
            {
              name: "Steam",
              href: "https://steamcommunity.com/id/Sciuridae_/",
              icon: ["fab", "steam"],
            },
            {
              name: "Twitter",
              href: "http://twitter.com/Sciuridae0603",
              icon: ["fab", "twitter"],
            },
          ],
        },
        works: {
          title: "Works 作品",
          icon: "briefcase",
          items: [
            {
              name: "Telegram osu! Bot",
              description: "在 Telegram 內取得 osu! 帳號/圖譜資訊",
              href: "https://github.com/sciuridae0603/telegram_osu_bot",
              image: "assets/works/osubot.png",
              width: "60vw",
            },
            {
              name: "2018公投地圖",
              description: "點擊地區及公投顯示出公投數據",
              href: "https://github.com/sciuridae0603/referendum2018",
              image: "assets/works/referendum2018.png",
              width: "60vw",
            },
            {
              name: "計數器",
              description: "利用 Vue.js 製作出的簡易計數器",
              href: "https://github.com/R20tw/counter",
              image: "assets/works/counter.png",
              width: "60vw",
            },
            {
              name: "個人網站",
              description: "就是你現在在看的",
              href: "https://github.com/sciuridae0603/sciuridae.me",
              image: "assets/works/web.png",
              width: "60vw",
            },
            {
              name: "OKTW Network 網站",
              description: "利用 Jekyll 製作的網站",
              href: "https://github.com/OKTW-Network/mc.oktw.one",
              image: "assets/works/mcoktw.png",
              width: "60vw",
            },
            {
              name: "OKTW Live 網站",
              description: "觀看直播、紀錄，附帶彈幕、即時人數",
              href: "https://github.com/OKTW-Network/Live",
              image: "assets/works/liveoktw.png",
              width: "60vw",
            },
            {
              name: "OKTW Live 後端",
              description: "提供前端 Websocket 接發收彈幕、即時人數",
              href: "https://github.com/OKTW-Network/Liver",
              image: "assets/works/liveroktw.png",
              width: "60vw",
            },
            {
              name: "維持 Telegram 帳戶工具",
              description: "讓您方便的保留 Account Session",
              href: "https://github.com/sciuridae0603/TelegramAccountKeeper",
              image: "assets/works/tgkeeper.jpg",
              width: "60vw",
            },
          ],
        },
        skills: {
          title: "Skills 技能",
          icon: "flask",
          items: [
            {
              name: "Javascript",
              icon: ["fab", "js"],
            },
            {
              name: "Python",
              icon: ["fab", "python"],
            },
            {
              name: "PHP",
              icon: ["fab", "php"],
            },
            {
              name: "Vue",
              icon: ["fab", "vuejs"],
            },
            {
              name: "HTML5",
              icon: ["fab", "html5"],
            },
            {
              name: "Laravel",
              icon: ["fab", "laravel"],
            },
          ],
        },
      },
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap");
body {
  font-family: "Noto Sans TC", sans-serif;
}

a {
  color: unset;
  text-decoration: none;
  margin-left: 8px;
  transition: 0.4s;
  padding-bottom:2px;
  border-bottom: 2px solid transparent;
}
a:hover {
  border-bottom: 2px solid #646e78;
}

#nav {
  border-radius: 2px;

  background: rgba(255, 255, 255, 0.8);
  color: #646e78;

  margin: 30px;
  padding: 12px 16px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 1.4rem;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 2);
}

#content {
  display: flex;
  justify-content: center;

  padding-top: 100px;
}
</style>
