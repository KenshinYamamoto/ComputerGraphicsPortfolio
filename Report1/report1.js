today = new Date();
document.write(today);
document.write("<h1>コンピュータグラフィックス</h1>");
document.write("<h3>担当 中村直人</h3>");
document.write("<p>生徒 山本堅心</p>");
document.write("<p>この授業では、WebGLを用いてコンピュータグラフィックスを作成します</P>");

var image = new Image(128,128); // imageオブジェクトを作成
image.src = "ganba.png"; // imageのソースの指定
document.body.appendChild(image); // imageをDOM要素に組み込む