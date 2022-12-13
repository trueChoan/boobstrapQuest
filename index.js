// from SO: http://stackoverflow.com/a/987376/1592915
function selectText(element) {
  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
  } else if (window.getSelection) {
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");

  }
}


const copyText = () => {
  let copyText = document.getElementById("htmlcode");
  let content = copyText.innerHTML;
  console.log(content);
  // Select the text field
  selectText(copyText);

  // Copy the text inside the text field
  document.execCommand("copy");
  // Alert the copied text
  alert("Copied the text: " + content);
}


$('.controls > .select').click(function () {
  var signature_id = $($(this).parents('.controls')[0]).data('sig');
  selectText($('#' + signature_id)[0]);
});

$('.controls > .save').click(function () {
  var link = $(this).siblings('a')[0];
  var sig_div = $('#' + $(this).parents('.controls').data('sig') + '_container');
  var sig_html = $(sig_div).html();
  $(link).attr('href', 'data:text/html, ' + sig_html);
  $(this).hide();
  $(link).show();
});

// update per inputs
$('#inputs input').keyup(function () {
  var input = $(this).attr('id');
  var val = $(this).val();
  $('.' + input).html(val);
  if (input == 'email') {
    $('.email').attr('href', 'mailto:' + val);
  }
  $('.controls > a').hide();
  $('.controls > .save').show();
});


function getFunction() {
  if (document.getElementById('get').checked) {
    let e = document.getElementById("htmlcode");
    let content = e.innerHTML;
    prompt("Copiez le contenu: Cmd+C, Enter", content);


  }

}

function getLogican() {
  if (document.getElementById('getlogican').checked) {
    let e = document.getElementById("htmlcode2");
    let content = e.innerHTML;
    prompt("Copiez le contenu: Cmd+C, Enter", content);


  }

}


