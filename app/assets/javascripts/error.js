$(document).ready(function($) {
  $('body').on('click', '#btn-signin', function(event) {
    event.preventDefault();
    var ok = $('#new_user').attr('action');
    var params = $('#new_user').serialize();
    $.ajax({
      url: ok,
      method: 'post',
      dataType: 'json',
      data: params,
    })
      .done(function(response) {
        if (response.status == 'error') {
          sweetAlert('Invalid password or email!');
        }
      })
      .fail(function() {
        location.href = '/';
      });
  });
  $('body').on('click', '#sub-signup', function(event) {
    event.preventDefault();
    var tet = $('#f-signup').attr('action');
    var params1 = $('#f-signup').serialize();
    $.ajax({
      url: tet,
      method: 'post',
      dataType: 'json',
      data: params1,
    })
      .done(function(response) {
        if (response.status == 'error1') {
          sweetAlert('Please complete all information!');
        }
      })
      .fail(function() {
        sweetAlert('Signup successfully! You can login!');
        setTimeout(function(){
          $('#signup').modal('hide');
          $('#login').modal('show');
        },800);
      });
  });

  $('body').on('click', '#btn-create', function(event) {
    event.preventDefault();
    var ok = $('#new_post').attr('action');
    var ak = $('.row');
    var params = $('#new_post').serialize();
    $.ajax({
      url: ok,
      method: 'post',
      dataType: 'json',
      data: params,
    })
      .done(function(response) {
        if(response.status == 'success') {
          ak.closest('body').find(".posts").prepend(response.html);
          $('#new_post').closest('.row').find(".title-field.form-control").val("");
          $('#new_post').closest('.row').find(".content-field.form-control").val("");
          $('#newpost').modal('hide');
        }
        else
          {
            sweetAlert('Please complete your posts!');
          }
      })
      .fail(function() {
      });
  });
  $('body').on('click','.dele-post',function(event){
    event.preventDefault();
    var ok = $(this);
        $.ajax({
        type: ok.attr('data-method'),
        url: ok.attr('href'),
        data: {},
        dataType: 'json',
        success: function (response) {
          if (response.status == 'dessuccess') {
            ok.closest('.post-ok').fadeOut('slow');
          }
        },
        error: function (xhr, ajaxOptions, thrownError) {
          console.log('error...', xhr);
        },
        complete: function () {
        }
      });
        return false;
  });
});