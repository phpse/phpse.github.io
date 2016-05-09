jQuery(document).ready(function($) {
    "use strict";

    var $membersContainer = $('#js-members');
    var $memberCountContainer = $('#js-members-count');

    $.ajax('https://raw.githubusercontent.com/phpse/medlemsregister/master/members.json', {
        dataType: 'json',
        success: function(members) {
            var $memberList = $('<ul/>');

            for (var i in members) {
                var name =  members[i].name;
                var githubUrl = 'https://github.com/' + members[i].github;
                var avatarUrl = githubUrl + '.png?size=200';

                $memberList.append(
                    $('<li/>').append(
                        $('<a/>').attr({ href: githubUrl, target: '_blank' }).append(
                            $('<img/>').attr('src', avatarUrl),
                            $('<span/>').text(name)
                        )
                    )
                );
            }

            $membersContainer.append($memberList);
            $memberCountContainer.text('(' + members.length + ')');
        }
    });
});
