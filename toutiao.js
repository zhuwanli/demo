$(function(){
	var current=0;
	var t=	setInterval(function(){
			if(current<3)
			{
				current++;
				$('.list-right li').eq(current).trigger('mouseover')
			}else
			{
				current=0;
				$('.list-right li').eq(current).trigger('mouseover')
			}
			
		},4000)

	$('.list-right li').on('mouseover',function(){
		current=$('.list-right li').index($(this))
		show(current);
		setTime()
	})

	function show(num){
		$('.list-right li').eq(num).addClass('active').siblings().removeClass('active');
		$('.banners li').eq(num).addClass('show').siblings().removeClass('show');
	}

	function setTime(){
		clearInterval(t)
		t=setInterval(function(){
			if(current<3)
			{
				current++;
				$('.list-right li').eq(current).trigger('mouseover')
			}else
			{
				current=0;
				$('.list-right li').eq(current).trigger('mouseover')
			}
		},4000)
	}

})