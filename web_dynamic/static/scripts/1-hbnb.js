$(document).ready(function () {
  let checked_amenities = [];

  $('input[type="checkbox"]').on('click', function () {
    console.log('amenity_id');

    if ($(this).is(':checked')) {
      checked_amenities.push($(this).data('name'));
      $('.amenities h4').text(checked_amenities.join(' ,'));
    } else {
      if ($(this).not(':checked')) {
        let index = checked_amenities.indexOf($(this).data('name'));
        checked_amenities.splice(index, 1);

        $('.amenities h4').text(checked_amenities.join(' ,'));

        if (checked_amenities.length == 0) {
          $('.amenities h4').html('&nbsp;');
        }
      }
    }

    console.log(checked_amenities.join(', '));
  });
});
