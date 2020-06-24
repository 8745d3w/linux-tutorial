/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "06127089f0547899d37ff5b4e023d7df"
  },
  {
    "url": "assets/css/0.styles.dae92b99.css",
    "revision": "44b779f48fad056cf6900adbbbae7dc9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fc4e1ec0.js",
    "revision": "1c227f665ee2e30f9fb0ccf0a2ac6f93"
  },
  {
    "url": "assets/js/11.02242470.js",
    "revision": "200ee7fa8bd1c609f6db104519403943"
  },
  {
    "url": "assets/js/12.b48d92be.js",
    "revision": "e8827374849a386ece598bca3328d228"
  },
  {
    "url": "assets/js/13.c79083cc.js",
    "revision": "773046b5d632bbecf13c377615c70fdc"
  },
  {
    "url": "assets/js/14.3beaad49.js",
    "revision": "4069096dc918d39028a952653770cf99"
  },
  {
    "url": "assets/js/15.ff638208.js",
    "revision": "eddaae7ac7a03db7e594cc3d3e58b440"
  },
  {
    "url": "assets/js/16.90c3977a.js",
    "revision": "79de36d5e348a230f4a099c0e47e19d1"
  },
  {
    "url": "assets/js/17.d2ac813b.js",
    "revision": "66a0ff614c9e609c1a35a0a6f4e87b7e"
  },
  {
    "url": "assets/js/18.c9e53403.js",
    "revision": "77e01f22430847833da782b6d3ac6fc3"
  },
  {
    "url": "assets/js/19.8165f8b6.js",
    "revision": "b3e879b4a62ef836b553982e32d009f4"
  },
  {
    "url": "assets/js/20.0672a454.js",
    "revision": "2276d99a8552fccef062d8690fd970a9"
  },
  {
    "url": "assets/js/21.0b191c26.js",
    "revision": "251c951692fe72b4f3d5e45239bfffae"
  },
  {
    "url": "assets/js/22.6e8bb179.js",
    "revision": "048c730b342ddd77c487d8111a5a7ac4"
  },
  {
    "url": "assets/js/23.b72f3316.js",
    "revision": "208d3341b2b5db8d7850f7b12c57649c"
  },
  {
    "url": "assets/js/24.93d603d0.js",
    "revision": "a524f3b1c5e5441097ca8766a8062a92"
  },
  {
    "url": "assets/js/25.f81daa3c.js",
    "revision": "e941bf81db203a02558c21fb2e9c1892"
  },
  {
    "url": "assets/js/26.4e2d8cc7.js",
    "revision": "8b457273f9d41ef126ec49fc61693af9"
  },
  {
    "url": "assets/js/27.1b9b4f4f.js",
    "revision": "fd42aeffafd9b64a8a4980b34eab7ba8"
  },
  {
    "url": "assets/js/28.0fbe13bb.js",
    "revision": "08552f7061eb7ccd5e4491332bfd6b03"
  },
  {
    "url": "assets/js/29.61b15cb4.js",
    "revision": "00b9b9e174a6489eefadd7dadc099c51"
  },
  {
    "url": "assets/js/30.d1f3becb.js",
    "revision": "fb94b74c7ba8aec79ba1e58d047f48c1"
  },
  {
    "url": "assets/js/31.fef1b4ab.js",
    "revision": "6c9aa4c3227e0315aff8f4f3c2b8ed13"
  },
  {
    "url": "assets/js/32.379bff71.js",
    "revision": "ab2bd4e59092145cda647805a64ab282"
  },
  {
    "url": "assets/js/33.3f20391a.js",
    "revision": "b8e8bd1d52b64d41e0854df1f941040e"
  },
  {
    "url": "assets/js/34.3dcebd72.js",
    "revision": "7f01100f946f53f807874704a6a1a137"
  },
  {
    "url": "assets/js/35.82edb7b7.js",
    "revision": "b5c84b98d5bcdfcdb8d584376385cffa"
  },
  {
    "url": "assets/js/36.761d1a6a.js",
    "revision": "9409b326a261de3d414aae915436585d"
  },
  {
    "url": "assets/js/37.65c28d70.js",
    "revision": "c4903db909f43e7f7596fadc245d9911"
  },
  {
    "url": "assets/js/38.58fd118f.js",
    "revision": "2f8ba10e7c68e0b964032671acdba45d"
  },
  {
    "url": "assets/js/39.0c8aa842.js",
    "revision": "a3deefd36495a08c816eeb4517d01142"
  },
  {
    "url": "assets/js/4.59418286.js",
    "revision": "08613a548c66ed1199b0466608447ab9"
  },
  {
    "url": "assets/js/40.89d8d82a.js",
    "revision": "be73e0fb0e6327b765edabc83cc167e6"
  },
  {
    "url": "assets/js/41.526754e6.js",
    "revision": "4f8fbd8cc2a38e43aec1d7e99eb11edf"
  },
  {
    "url": "assets/js/42.9cac9520.js",
    "revision": "3618937c1bf1743735c6f3a026eaa7b0"
  },
  {
    "url": "assets/js/43.095e907a.js",
    "revision": "748adc73fb5e9e201bc57af77ec7da8f"
  },
  {
    "url": "assets/js/44.d7e15cea.js",
    "revision": "e34cdbe4f1e794a2f856faabcf07b55b"
  },
  {
    "url": "assets/js/45.7a3c98bd.js",
    "revision": "474360c0e0868d30663734399484a096"
  },
  {
    "url": "assets/js/46.f9669783.js",
    "revision": "e15f039a62ddb04eef3eefeb92741390"
  },
  {
    "url": "assets/js/47.f35cea07.js",
    "revision": "998e1e2189d86b1747bd66cf9429a9c8"
  },
  {
    "url": "assets/js/48.af1d5555.js",
    "revision": "4dc29d177bb1bdc19585e6090ebf263c"
  },
  {
    "url": "assets/js/49.b7d6985a.js",
    "revision": "7ebd52edd9cce293b6d8002197ce67f1"
  },
  {
    "url": "assets/js/5.97e60065.js",
    "revision": "977df4254a571ea54595bc5067f5ad49"
  },
  {
    "url": "assets/js/50.6806ba36.js",
    "revision": "33a486ee4e08f4d0fc98eb71e36a9520"
  },
  {
    "url": "assets/js/51.04f25218.js",
    "revision": "28a158c5c48e7f8c72acc2b008250cd9"
  },
  {
    "url": "assets/js/52.649114a7.js",
    "revision": "0e89a419ddabb392503cb30b19457ef6"
  },
  {
    "url": "assets/js/53.6b515543.js",
    "revision": "c7a53b454b52c3cf0dc97323fca3e509"
  },
  {
    "url": "assets/js/54.20ef723d.js",
    "revision": "c3157eaf081c5ee5d0150696b1847154"
  },
  {
    "url": "assets/js/55.88ca6c4d.js",
    "revision": "ef8ef9cc7e764d864aa74871442dd632"
  },
  {
    "url": "assets/js/56.96bfe40c.js",
    "revision": "669761595084fa4ffaa57f411e446b0b"
  },
  {
    "url": "assets/js/57.e45aef12.js",
    "revision": "c9c53fc467db039da7fd47419d9033a6"
  },
  {
    "url": "assets/js/58.90ce1b59.js",
    "revision": "3e255200cc52d18a7cc28ea6564e0d83"
  },
  {
    "url": "assets/js/59.bab98aa4.js",
    "revision": "b5be97df264b83eabd1c22db87414e74"
  },
  {
    "url": "assets/js/6.f388beed.js",
    "revision": "5e032c1f82ddd37761e47f5288098da0"
  },
  {
    "url": "assets/js/60.b0ed62d6.js",
    "revision": "56a0500a0614c3828910c90997fb1b1a"
  },
  {
    "url": "assets/js/61.6fc13950.js",
    "revision": "507f853a0095d18a69ec8d3c0b8fa180"
  },
  {
    "url": "assets/js/62.1a6e3a90.js",
    "revision": "86e2edb711e881bdbe7e31a5415f338c"
  },
  {
    "url": "assets/js/63.bcdc0a25.js",
    "revision": "ae77db87d9646087614ebd6deae92990"
  },
  {
    "url": "assets/js/64.897a506a.js",
    "revision": "29bb8a827068dc70be65d9dd77516723"
  },
  {
    "url": "assets/js/65.e9ce1c0c.js",
    "revision": "f50ef1f955817b7b92e1dc4100e4a0c9"
  },
  {
    "url": "assets/js/66.6eeebaca.js",
    "revision": "b39d1cebcbad769ac5640a439e3533dc"
  },
  {
    "url": "assets/js/67.57a8a0db.js",
    "revision": "ca44fd070bbc86e9be2898f675b9853b"
  },
  {
    "url": "assets/js/68.02b0c88b.js",
    "revision": "10fa11d329ea5746ec3948099cb222e6"
  },
  {
    "url": "assets/js/7.ac8df731.js",
    "revision": "6eaf4ff355d9d47917138cff30c028f7"
  },
  {
    "url": "assets/js/8.7c52471f.js",
    "revision": "bb6c4b10a423173f665a7545049f3b1e"
  },
  {
    "url": "assets/js/9.d89a48a6.js",
    "revision": "c9e0c3b5b38bae418a418ffbe8faecfa"
  },
  {
    "url": "assets/js/app.c1b1ae80.js",
    "revision": "ae92218598f05a398a11ed59641291f2"
  },
  {
    "url": "assets/js/vendors~flowchart.8982e116.js",
    "revision": "bc7fea975a76ce449937af951712aec5"
  },
  {
    "url": "assets/js/vendors~notification.f509967c.js",
    "revision": "d6ac604e967948462bdb489a24fe79b5"
  },
  {
    "url": "docker/docker-cheat-sheet.html",
    "revision": "a62e18f56f05af6f3638f2adcc6cbb36"
  },
  {
    "url": "docker/docker-compose.html",
    "revision": "4930b89ed3ab0f9fd4c77d1585dad4d2"
  },
  {
    "url": "docker/docker-dockerfile.html",
    "revision": "c57260ef0f770bc22176c421806b8f90"
  },
  {
    "url": "docker/docker-quickstart.html",
    "revision": "241d6e4f306ed1687479e0812c06e1fa"
  },
  {
    "url": "docker/index.html",
    "revision": "c857416089a66a72dc6243441d72dd96"
  },
  {
    "url": "docker/kubernetes.html",
    "revision": "2fd85fda701e11a98d2aa0052de8ed85"
  },
  {
    "url": "docker/service/docker-install-mysql.html",
    "revision": "17eaa41fa47cab842b46424786b4d841"
  },
  {
    "url": "docker/service/docker-install-nginx.html",
    "revision": "661ee9db735255927b81a8187bf13e53"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "6fa2d18c3211133be707fcf01a791e3c"
  },
  {
    "url": "linux/cli/free.html",
    "revision": "4b29d4b6da28519df835dac99a5c7fb8"
  },
  {
    "url": "linux/cli/grep.html",
    "revision": "d94721454c93e609163e1b1303225541"
  },
  {
    "url": "linux/cli/index.html",
    "revision": "04f9968fe8253997e1265bab3da62933"
  },
  {
    "url": "linux/cli/iostat.html",
    "revision": "dee0988f3bc2d7527b690c078121ec30"
  },
  {
    "url": "linux/cli/iotop.html",
    "revision": "52adc5eac555399910e22e9805d41e9a"
  },
  {
    "url": "linux/cli/linux-cli-dir.html",
    "revision": "d50eb75920fb6a2661118a658af7adfe"
  },
  {
    "url": "linux/cli/linux-cli-file-compress.html",
    "revision": "144aed18e6cc9307efcef86e90e9b7a1"
  },
  {
    "url": "linux/cli/linux-cli-file.html",
    "revision": "c4154c4bfc4cbb03bb9542d53814dfd0"
  },
  {
    "url": "linux/cli/linux-cli-hardware.html",
    "revision": "b3e71be4c3e5daf013a5d3fafb3c850e"
  },
  {
    "url": "linux/cli/linux-cli-help.html",
    "revision": "cf352bfb807d04fea8e06cbecfd973ec"
  },
  {
    "url": "linux/cli/linux-cli-net.html",
    "revision": "0b4ad0d7ea62bf27b9a48ef1219618f4"
  },
  {
    "url": "linux/cli/linux-cli-software.html",
    "revision": "6df6bec0ab7e234e1c7b42e75df00f01"
  },
  {
    "url": "linux/cli/linux-cli-system.html",
    "revision": "301f96ed8b26107569139c657df37480"
  },
  {
    "url": "linux/cli/linux-cli-user.html",
    "revision": "470e591473cbf3c80d1e0af979f876a1"
  },
  {
    "url": "linux/cli/scp.html",
    "revision": "272a3e61a5c1645942ee817a857dcac5"
  },
  {
    "url": "linux/cli/top.html",
    "revision": "4f962edabe000c770aebda4e815290d6"
  },
  {
    "url": "linux/cli/vmstat.html",
    "revision": "3167758c69feeb202eca017a60aada92"
  },
  {
    "url": "linux/cli/命令行的艺术.html",
    "revision": "461817478183b845f805a97bbfa68b12"
  },
  {
    "url": "linux/expect.html",
    "revision": "bbd474bd409ef1c34a6ed728fd077fd8"
  },
  {
    "url": "linux/ops/crontab.html",
    "revision": "bd4899362859b55034435103488fa044"
  },
  {
    "url": "linux/ops/firewalld.html",
    "revision": "72bb516b205233089550562f66603b87"
  },
  {
    "url": "linux/ops/index.html",
    "revision": "fe86b49f9c173c89fff9798d3664892b"
  },
  {
    "url": "linux/ops/iptables.html",
    "revision": "b2354a27115837765ae280c5cad3b173"
  },
  {
    "url": "linux/ops/network-ops.html",
    "revision": "28443f8cba97191092c089c7aa46b364"
  },
  {
    "url": "linux/ops/ntp.html",
    "revision": "15682aaa5b8ca33d549e748a41322210"
  },
  {
    "url": "linux/ops/samba.html",
    "revision": "4e83d0ba0d034521c6f0e94b1480637a"
  },
  {
    "url": "linux/ops/systemd.html",
    "revision": "2de54c90801ed3128ea05421c92158bb"
  },
  {
    "url": "linux/ops/vim.html",
    "revision": "622aa85db4c5e5e5b4b50d8386d466d4"
  },
  {
    "url": "linux/ops/zsh.html",
    "revision": "793251328c5129f8e675dc232d1c3c59"
  },
  {
    "url": "linux/soft/apollo/index.html",
    "revision": "65a52243f48141fd1de6d626920055ce"
  },
  {
    "url": "linux/soft/elastic/elastic-beats.html",
    "revision": "4cbbd45c56b4b46f4be7de1a8bb9db8b"
  },
  {
    "url": "linux/soft/elastic/elastic-kibana.html",
    "revision": "d73589d280e85139334fffa966f75122"
  },
  {
    "url": "linux/soft/elastic/elastic-logstash.html",
    "revision": "845d7df6f57abe1eaa06cf48084c1427"
  },
  {
    "url": "linux/soft/elastic/elastic-quickstart.html",
    "revision": "d958a7c11411227342b72d869d12444b"
  },
  {
    "url": "linux/soft/elastic/index.html",
    "revision": "c969048729254f04485e76a6349835a6"
  },
  {
    "url": "linux/soft/fastdfs.html",
    "revision": "92d3bbec6f027eeea1422b5212ec84b7"
  },
  {
    "url": "linux/soft/gitlab-ops.html",
    "revision": "0a6c4dac89e1e0422021f952a2907b24"
  },
  {
    "url": "linux/soft/index.html",
    "revision": "ee0e6cfd83860ba5d22379399abe0c44"
  },
  {
    "url": "linux/soft/jdk-install.html",
    "revision": "14228b34b7a2acc21e8bf15e38d9aed8"
  },
  {
    "url": "linux/soft/jenkins-ops.html",
    "revision": "b744d2602781e8176242a751d43914cb"
  },
  {
    "url": "linux/soft/kafka-install.html",
    "revision": "3869ddcbeab0838ae485a5a5b393e874"
  },
  {
    "url": "linux/soft/maven-install.html",
    "revision": "38fa79c48f0889c621c0a95d6c8a18a5"
  },
  {
    "url": "linux/soft/mongodb-ops.html",
    "revision": "95f01fc92afea52c7afd742468a572f5"
  },
  {
    "url": "linux/soft/nacos-install.html",
    "revision": "10dfac945954b25c58053b8ec796140e"
  },
  {
    "url": "linux/soft/nexus-ops.html",
    "revision": "56169911bb6339d7e3aa6930b489f3d8"
  },
  {
    "url": "linux/soft/nodejs-install.html",
    "revision": "a1514ba1d3905d5042471026915c20a2"
  },
  {
    "url": "linux/soft/rocketmq-install.html",
    "revision": "8f6b31621e8157865f976560898b2adc"
  },
  {
    "url": "linux/soft/svn-ops.html",
    "revision": "e383cafa31e5a2260db957f4a2a099d2"
  },
  {
    "url": "linux/soft/tomcat-install.html",
    "revision": "61b9dd28f8256f293a628ed0dbe2ad7e"
  },
  {
    "url": "linux/soft/yapi-ops.html",
    "revision": "4dfd1f3e8651e8019611a1ce5f8c1170"
  },
  {
    "url": "mac/soft/ruby-install.html",
    "revision": "c0c5f85f5bc4ea8767dd8502d2ded9ff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
