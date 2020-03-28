let chartRendered = false
let radarChart = null

function selectPlayer(event) {
    const selectedId = $(event).data("id")

    const selectedPlayer = players
        .find(item => item._id === selectedId)

    renderChart(selectedPlayer.data)
}

function renderChart(data) {
    chartRendered = true

    const {
        Name
    } = data;

    // $("#myChar").empty();
    var ctx = document.getElementById('myChart');
    if (radarChart) {
        radarChart.destroy()
    }
    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                "Crossing",
                "Finishing",
                "HeadingAccuracy",
                "ShortPassing",
                "Volleys",
                "Dribbling",
                "Curve",
                "FKAccuracy",
                "LongPassing",
                "BallControl",
                "Acceleration",
                "SprintSpeed",
                "Agility",
                "Reactions",
                "Balance",
                "ShotPower",
                "Jumping",
                "Stamina",
                "Strength",
                "LongShots",
                "Aggression",
                "Interceptions",
                "Positioning",
                "Vision",
                "Penalties",
                "Composure",
                "Marking",
                "StandingTackle",
                "SlidingTackle",
                "GKDiving",
                "GKHandling",
                "GKKicking",
                "GKPositioning",
                "GKReflexes"
            ],
            datasets: [{
                label: Name,
                data: getChartData(data),
            }]
        },
        options: {
            scale: {
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
}

function getChartData(data) {
    const {
        Name,
        Crossing,
        Finishing,
        HeadingAccuracy,
        ShortPassing,
        Volleys,
        Dribbling,
        Curve,
        FKAccuracy,
        LongPassing,
        BallControl,
        Acceleration,
        SprintSpeed,
        Agility,
        Reactions,
        Balance,
        ShotPower,
        Jumping,
        Stamina,
        Strength,
        LongShots,
        Aggression,
        Interceptions,
        Positioning,
        Vision,
        Penalties,
        Composure,
        Marking,
        StandingTackle,
        SlidingTackle,
        GKDiving,
        GKHandling,
        GKKicking,
        GKPositioning,
        GKReflexes
    } = data;

    return [
        Crossing,
        Finishing,
        HeadingAccuracy,
        ShortPassing,
        Volleys,
        Dribbling,
        Curve,
        FKAccuracy,
        LongPassing,
        BallControl,
        Acceleration,
        SprintSpeed,
        Agility,
        Reactions,
        Balance,
        ShotPower,
        Jumping,
        Stamina,
        Strength,
        LongShots,
        Aggression,
        Interceptions,
        Positioning,
        Vision,
        Penalties,
        Composure,
        Marking,
        StandingTackle,
        SlidingTackle,
        GKDiving,
        GKHandling,
        GKKicking,
        GKPositioning,
        GKReflexes
    ]
}