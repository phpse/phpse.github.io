jQuery(document).ready(function($) {
    "use strict";

    var $membersContainer = $('#js-members');

    $.ajax('https://raw.githubusercontent.com/phpse/medlemsregister/master/members.json', {
        dataType: 'json',
        success: function(members) {
            var $memberList = $('<ul/>');

            for (var i in members) {
                var name =  members[i].name;
                var avatar = 'https://github.com/' + members[i].github + '.png?size=200';

                $memberList.append(
                    $('<li/>').append(
                        $('<img/>').attr('src', avatar),
                        $('<span/>').text(name)
                    )
                );
            }

            $membersContainer.append($memberList);
        }
    });
});
