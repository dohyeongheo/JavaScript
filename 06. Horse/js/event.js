let move = 0;

// 1. 'left'버튼을 눌렀을 때, 왼쪽으로 50px 씩 이동 
$('.btn.left').on('click', function() {
    if (move < 1200) {
        move += 50;
        $('#horse').css('right', move + 'px')
    }
})

// 2. 'right'버튼을 눌렀을 때, 오른쪽으로 50px씩 이동 
$('.btn.right').on('click', function() {
        if (move > 0) {
            move -= 50;
            $('#horse').css('right', move + 'px')
        }
    })
    // 단, img 밖으로 말이 넘어가지 않도록 주의!


$('body').on('keydown', function(event) {
    console.log(event.keyCode)

    // 방향키 왼쪽버튼을 누른다면
    if (event.keyCode == 37) {
        if (move < 1200) {
            move += 50;
            $('#horse').css('right', move + 'px')
        }
    } else if (event.keyCode == 39) {
        if (move > 0) {
            move -= 50;
            $('#horse').css('right', move + 'px')
        }
    } else if (event.keyCode == 32) {
        $('#horse')
            .stop(true)
            .animate({ bottom: '400px' }, 500)
            .animate({ bottom: '200px' }, 500)
    }
})