let players = []

loadCards()

function renderList(itens){
    let listToRender = itens
        .map(item => {
            return templateCard(item)
        }).join('')

    $(listToRender).appendTo("#player-list")
}

function templateCard(player) {
    const {
        Overall,
        Position,
        Flag,
        Photo,
        Name,
        Dribbling,
        ShotPower,
        ShortPassing,
        StandingTackle,
        Stamina,
        SprintSpeed
    } = player.data

    return `
        <li class="fifa-card" data-id="${player._id}"
            data-toggle="modal"
            data-target="#exampleModal"
            onclick="selectPlayer(this)">
            <div class="main-info">
                <div class="left-content">
                    <div class="overall">${Overall}</div>
                    <div class="position">${Position}</div>
                    <img src="${Flag}" class="nation" />
                    <img src="${player.data["Club Logo"]}" class="club" />
                </div>
                <img src="${adjustPlayerImage(Photo)}" class="profile" />
            </div>
            <div class="detail-info">
                <div class="name">${Name}</div>
                <div class="status">
                    <div class="info-values">
                        <div class="value">${SprintSpeed}</div>
                        <div class="title">PAC</div>
                    </div>
                    <div class="info-values">
                        <div class="value">${Dribbling}</div>
                        <div class="title">DRI</div>
                    </div>
                    <div class="info-values">
                        <div class="value">${ShotPower}</div>
                        <div class="title">SHO</div>
                    </div>
                    <div class="info-values">
                        <div class="value">${StandingTackle}</div>
                        <div class="title">DEF</div>
                    </div>
                    <div class="info-values">
                        <div class="value">${ShortPassing}</div>
                        <div class="title">PAS</div>
                    </div>
                    <div class="info-values">
                        <div class="value">${Stamina}</div>
                        <div class="title">PHY</div>
                    </div>
                </div>
            </div>
        </li>
    `
}

function adjustPlayerImage(imageUrl) {
    return imageUrl.replace("players/4/", "players/10/")
}

function loadCards() {
    const start = players.length === 0 ? 0 : players.length
    const quantity = 9
    $.ajax({
        url: `https://fifagama.herokuapp.com/fifa19/${start}/${quantity}`
    }).then(function(data) {
        players = [...players, ...data]
        renderList(data)
        if (players.length === 9) {
            $(`
                <button class="btn btn-primary btn-lg" onclick="loadCards()">
                    Carregar mais
                </button>
            `).appendTo("#fifa-section");
        }
    });
}