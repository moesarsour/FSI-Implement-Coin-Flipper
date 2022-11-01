let headsRolls = 0
let tailsRolls = 0

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('flip').addEventListener('click' ,()=>{
        let flippedHeads = Math.random()< 0.5
        if (flippedHeads) {
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'
            headsRolls += 1
        }
        else {
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!'
            tailsRolls += 1
        }
        let total = headsRolls + tailsRolls

        let percentHeads = 0
        let percentTails = 0

        if (total > 0) {
            percentHeads = Math.round((headsRolls / total) * 100)
            percentTails = Math.round((tailsRolls / total) * 100)
        }
        document.getElementById('heads').textContent = headsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
    document.getElementById('clear').addEventListener('click', function() {
            headsRolls = 0
            tailsRolls = 0

            document.getElementById('message').textContent = 'May the Odds be in Your Favor!'

            let total = headsRolls + tailsRolls
            let percentHeads = 0
            let percentTails = 0

            if (total > 0) {
                percentHeads = Math.round((headsRolls / total) * 100)
                percentTails = Math.round((tailsRolls / total) * 100)
            }
            document.getElementById('heads').textContent = headsRolls
            document.getElementById('heads-percent').textContent = percentHeads + '%'
            document.getElementById('tails').textContent = tailsRolls
            document.getElementById('tails-percent').textContent = percentTails + '%'
    })
})
