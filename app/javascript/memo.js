const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

function post (){
  const submit = document.getElementById("submit");
  //リクエストを送信する処理
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    //フォームの要素を取得
    const XHR = new XMLHttpRequest();
    //非同期通信を行うためにXMLHttpRequesオブジェクトを生成
    XHR.open("POST", "/posts", true);
    //リクエストを指定
    XHR.responseType = "json";
    //レスポンスのデータを『JSON』形式で返す。
    XHR.send(formData);
    //sendメソッドとは、リクエストを送信するするメソッド。フォームに入力された内容をサーバー側に送信する。
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      //<挿入したい要素名>.insertAdjacentHTML(挿入したい位置,挿入したいHTML);    HTMLを挿入したい箇所に挿入するメソッド。第一引数に挿入したい位置、第二引数に挿入したいHTMLを記述
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
};

window.addEventListener('load', post);