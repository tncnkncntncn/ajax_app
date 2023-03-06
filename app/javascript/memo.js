function post (){
  const submit = document.getElementById("submit");
  //リクエストを送信する処理
  
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    const form = document.getElementById("form");
    const formData = new FormData(form);
    //フォームの要素を取得 
    const XHR = new XMLHttpRequest();
    //非同期通信を行うためにXMLHttpRequestオブジェクトを生成
    XHR.open("POST", "/posts", true);
    //リクエストを指定。
    XHR.responseType = "json";
    //レスポンスのデータを「JSON形式」で返す
    XHR.send(formData);
    // send()メソッドとは、リクエストを送信するメソッド.フォームに入力された内容をサーバー側に送信

  });
 };
 
 window.addEventListener('load', post);