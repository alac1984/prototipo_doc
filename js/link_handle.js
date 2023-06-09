function populateSidebarList(data) {
    const sidebarList = document.getElementById('sidebarList');

    for (let menuItem in data) {
        const item = data[menuItem];
        const itemLink = item.link;
        const itemIcon = item.icon;
        sidebarList.innerHTML += `
            <li class="nav-item p-2">
                <a class="nav-link text-white d-inline p-1" hx-get="${itemLink}" hx-target="#content-target" aria-current="page" href="#">
                  <i class="${itemIcon} p-1 link-icon d-inline"></i>
                  ${menuItem}
                </a>
            </li>
        `;
    }

    htmx.process(sidebarList);
}
