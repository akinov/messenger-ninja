chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == "toggle") {
    toggleNinja();
  }
});

'use strict';

let isHide = false;
const nekoSrc = 'https://pbs.twimg.com/profile_images/424484505915621376/EOwsjaMZ_400x400.png',
      nekoName = '猫田 猫男';

function toggleNinja() {
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
    $this.attr('src', nekoSrc);
  } else {
    $this.attr('src', $this.attr('origin-src'));
  }
}

function toggleText($this) {
  if (isHide) {
    $this.text(nekoName);
  } else {
    $this.text($this.attr('origin-text'));
  }
}
