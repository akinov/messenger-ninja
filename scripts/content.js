chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == "toggle") {
    toggleNinja();
  }
});

'use strict';

let isHide = false,
    dummyImgUrl = '',
    dummyName = '';

chrome.storage.sync.get(
    {
      dummyImgUrl: 'https://pbs.twimg.com/profile_images/424484505915621376/EOwsjaMZ_400x400.png',
      dummyName: '猫田 猫男'
    },
    function(items) {
      console.log(items);
      dummyImgUrl = items.dummyImgUrl;
      dummyName = items.dummyName;
    }
);

function toggleNinja() {
  console.log(dummyImgUrl, dummyName);
  isHide = !isHide;

  $('._1t2u ._4ld- > img, ._1t2u ._1jt6 img, .uiScrollableAreaContent ._55lt img').each(function() {
    const $this = $(this);
    if (!$this.attr('origin-src')) {
      $this.attr('origin-src', $this.attr('src'));
    }

    toggleImg($this);
  });

  $('._3oh- a, .uiScrollableAreaContent ._1ht6, ._17w2 ._3oh-').each(function() {
    const $this = $(this);
    if (!$this.attr('origin-text')) {
      $this.attr('origin-text', $this.text());
    }
    toggleText($this);
  });
}

function toggleImg($this) {
  if (isHide) {
    $this.attr('src', dummyImgUrl);
  } else {
    $this.attr('src', $this.attr('origin-src'));
  }
}

function toggleText($this) {
  if (isHide) {
    $this.text(dummyName);
  } else {
    $this.text($this.attr('origin-text'));
  }
}
