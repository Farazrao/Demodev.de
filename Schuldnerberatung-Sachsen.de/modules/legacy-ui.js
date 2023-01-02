

$(document).ready(function () {

  //Submit form with JS
  $("#submit-btn").click(function (e) {
    console.log("test submit button")
    e.preventDefault();

    var $form = $(this).closest('form');
    var $privacy = $('#privacyAccepted', $form);

    if ($privacy.length && !$privacy[0].checked) {
      var $label = $('[for="privacyAccepted"]', $form);
      var $link = $('a', $label);

      $label.css('color', 'red');
      $link.css({
        'color': 'red',
        'text-decoration': 'underline'
      });

      return;
    }

    // console.log('form', $form);
    $form.submit();
    $('#spinner-circle').show();
    $('#white-overlay').show();
  });

  $('[data-toggle]').on('click', function (e) {
    e.preventDefault();
    var tgtSel = $(e.currentTarget).attr('data-toggle');
    $(tgtSel).slideToggle(300);
  });

  $('.navbar--toggle').on('click', function (e) {
    e.preventDefault();
    $('.navbar .nav ul').toggleClass('active');
    $('.burgermeister').toggleClass('active');
  });

  $(document).foundation({
    tooltip: {
      selector: '.has-tip',
      additional_inheritable_classes: [],
      tooltip_class: '.tooltip',
      touch_close_text: 'tap to close',
      disable_for_touch: false,
      tip_template: function tip_template(selector, content) {
        return '<span data-selector="' + selector + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '">' + content + '</span>';
      }
    }
  });

  $('[data-modal]').modal();
});

//////////////////
// WEBPACK FOOTER
// ./src/js/modules/legacy-ui.js
// module id = 77
// module chunks = 1

//# sourceURL=webpack:///./src/js/modules/legacy-ui.js?