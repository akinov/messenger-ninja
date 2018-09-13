$(function(){

  // セーブボタンが押されたら、
  // ローカルストレージに保存する。
  $("#save").click(function () {
    chrome.storage.sync.set({
      dummyImgUrl: $("#dummy_img_url").val(),
      dummyName: $("#dummy_name").val()
    });
  });

  // オプション画面の初期値を設定する
  chrome.storage.sync.get(
      {},
      function(items) {
        $("#dummy_img_url").val(items.dummyImgUrl);
        $("#dummy_name").val(items.dummyName);
      }
  );
});
