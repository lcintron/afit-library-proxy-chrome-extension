function Utils() { };

Utils.compareUrlDomain = function (sourceUrl, urlDomainToMatch) {
    if (sourceUrl.length < urlDomainToMatch.length)
        return false;

    let j = 0;
    for (let i = 0; i < urlDomainToMatch.length; i++) {
        while (urlDomainToMatch[i] === '*' && j < sourceUrl.length && sourceUrl[j] !== '.') {
            j++;
            if (j >= sourceUrl.length)
                return true;
        }

        if (urlDomainToMatch[i] === '*' && sourceUrl[j] === '.') {
            i++;
        }
        else if (urlDomainToMatch[i] !== sourceUrl[j]) {
            return false;
        }

        j++;
    }
    return true;
}
Utils.prettyDate = function (now, time) {
    var date = new Date(time || ""),
        diff = (((new Date(now)).getTime() - date.getTime()) / 1000),
        day_diff = Math.floor(diff / 86400);

    if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31) {
        return;
    }

    return day_diff == 0 && (
        diff < 60 && "just now" ||
        diff < 120 && "1 minute ago" ||
        diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
        diff < 7200 && "1 hour ago" ||
        diff < 86400 && Math.floor(diff / 3600) + " hours ago") ||
        day_diff == 1 && "Yesterday" ||
        day_diff < 7 && day_diff + " days ago" ||
        day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
}