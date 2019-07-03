<template>
  <div id="app">
    <div id="background" />
    <div id="nav">
      <div id="nav-left">
        <router-link to="/">Sciuridae Li</router-link>
      </div>
      <div id="nav-right">
        <router-link to="/works">Works</router-link>&nbsp;&nbsp;
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
    <div id="content">
      <router-view v-bind:data="data" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        contact: {
          title: "Contact 聯絡我",
          icon: "address-book",
          items: [
            {
              name: "Telegram",
              href: "https://t.me/Sciuridae",
              icon: ["fab", "telegram"]
            },
            {
              name: "Mail",
              href: "mailto:sciuridae0603@gmail.com",
              icon: ["fas", "envelope"]
            },
            {
              name: "Facebook",
              href: "https://fb.me/sciuridae.li",
              icon: ["fab", "facebook"]
            },
            {
              name: "GitHub",
              href: "https://github.com/Sciuridae0603",
              icon: ["fab", "github"]
            },
            {
              name: "Steam",
              href: "https://steamcommunity.com/id/Sciuridae_/",
              icon: ["fab", "steam"]
            },
            {
              name: "Twitter",
              href: "http://twitter.com/Sciuridae0603",
              icon: ["fab", "twitter"]
            }
          ]
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
              width: "60vw"
            },
            {
              name: "2018公投地圖",
              description: "點擊地區及公投顯示出公投數據",
              href: "https://github.com/sciuridae0603/referendum2018",
              image: "assets/works/referendum2018.png",
              width: "60vw"
            },
            {
              name: "計數器",
              description: "利用 Vue.js 製作出的簡易計數器",
              href: "https://github.com/R20tw/counter",
              image: "assets/works/counter.png",
              width: "60vw"
            },
            {
              name: "個人網站",
              description: "就是你現在在看的",
              href: "https://github.com/sciuridae0603/sciuridae.me",
              image: "assets/works/web.png",
              width: "60vw"
            },
            {
              name: "OKTW Network 網站",
              description: "利用 Jekyll 製作的網站",
              href: "https://github.com/OKTW-Network/mc.oktw.one",
              image: "assets/works/mcoktw.png",
              width: "60vw"
            },
            {
              name: "OKTW Live 網站",
              description: "觀看直播、紀錄，附帶彈幕、即時人數",
              href: "https://github.com/OKTW-Network/Live",
              image: "assets/works/liveoktw.png",
              width: "60vw"
            },
            {
              name: "OKTW Live 後端",
              description: "提供前端 Websocket 接發收彈幕、即時人數",
              href: "https://github.com/OKTW-Network/Liver",
              image: "assets/works/liveroktw.png",
              width: "60vw"
            },
            {
              name: "維持 Telegram 帳戶工具",
              description: "讓您方便的保留 Account Session",
              href: "https://github.com/sciuridae0603/TelegramAccountKeeper",
              image: "assets/works/tgkeeper.jpg",
              width: "60vw"
            }
          ]
        },
        skills: {
          title: "Skills 技能",
          icon: "flask",
          items: [
            {
              name: "Python",
              icon: ["fab", "python"]
            },
            {
              name: "PHP",
              icon: ["fab", "php"]
            },
            {
              name: "HTML5",
              icon: ["fab", "html5"]
            },
            {
              name: "Javascript",
              icon: ["fab", "js"]
            },
            {
              name: "Laravel",
              icon: ["fab", "laravel"]
            },
            {
              name: "Vue",
              icon: ["fab", "vuejs"]
            },
            {
              name: "Repair",
              icon: ["fas", "wrench"]
            },
            {
              name: "Server Management",
              icon: ["fas", "server"]
            }
          ]
        }
      }
    };
  }
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
}

#background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  transform: scale(1.5);

  z-index: -100;

  background: url("assets/background.png");
  background-size: cover;
  background-position: fixed;
  background-position-y: -100px;
}

#nav {
  border-radius: 5px;

  background: white;
  color: #587291;

  margin: 30px;
  padding: 10px 20px 10px 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
}
#content {
  display: flex;
  justify-content: center;

  padding-top: 100px;
}
</style>
