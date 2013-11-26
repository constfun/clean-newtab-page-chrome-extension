window.onload = function () {

        var mostVisitedNode = document.querySelector('#most-visited');

        chrome.topSites.get(function (listOfSites) {

                listOfSites.forEach(function (site, i) {

                        console.log(i, site.title, site.url);

                        var pageNode = document.createElement('a');
                        pageNode.innerHTML = site.title;
                        pageNode.href = site.url;

                        //mostVisitedNode.appendChild(pageNode);
                });
                //var pageNode = document.createElement('div');
                //pageNode.id = 'page-1';
                //mostVisitedNode.appendChild(pageNode);
        });
};
