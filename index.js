$(function(){
	$(".sub").hide()
	$(".key").hide()
	$(".result,.last").hide()
	
	// time
	var timer = 5*60
	// order nunber
	var path = 0
	
	$(".start").click(function(){
		var countdown = setInterval(()=>{
			timer--
			$(".showtime").text( timer )
			if(timer==-1){
				alert('Game Over!')
				$(".showtime").text( 0 )
				clearInterval( countdown )
			}
			$(".btn").click(()=>{
				clearInterval( countdown )
			})
		},1000)
		$(this).parent().hide()
		$(".subject-1").show()
		
		$(".go").click(()=>{
			$(".last").hide()
			$(".text").show()
		})
	})
	$(".btn").click(()=>{
		path++
		$(".result").hide()
		$(".last").show()
		var user = $(".result input").val()
		$(".last div").append( "<p>"+path+'.'+user+'-'+num+"</p>" )
	})
	$(".rem").click(()=>{
		$(".last div>p").remove()
	})
	// record the mark by questions
	var num = 0
	for (var i = 0; i < $(".subject-1 div").length; i++) {
		$(".subject-1 div").eq(i).click(function(){
			$(this).parent().hide()
			$(this).parent().next().show()
			if($(this).children().attr('class')=='answer'){
				num ++
				
				$(".result .fraction").html( num )
				console.log( num )
				$(this).parent().next().find('.rightkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.rightkey').hide(200)
				},500)
			}else{
				num += 0
				
				$(".result .fraction").html( num )
				timer -= 10
				$(this).parent().next().find('.wrongkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.wrongkey').hide(200)
				},500)
			}
		})
	}
	for (var i = 0; i < $(".subject-2 div").length; i++) {
		$(".subject-2 div").eq(i).click(function(){
			$(this).parent().hide()
			$(this).parent().next().show()
			if($(this).children().attr('class')=='answer'){
				num ++
				
				$(".result .fraction").html( num )
				console.log( num )
				$(this).parent().next().find('.rightkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.rightkey').hide(200)
				},500)
			}else{
				num += 0
				
				$(".result .fraction").html( num )
				timer -= 10
				$(this).parent().next().find('.wrongkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.wrongkey').hide(200)
				},500)
			}
		})
	}
	for (var i = 0; i < $(".subject-3 div").length; i++) {
		$(".subject-3 div").eq(i).click(function(){
			$(this).parent().hide()
			$(this).parent().next().show()
			if($(this).children().attr('class')=='answer'){
				num ++
				
				$(".result .fraction").html( num )
				console.log( num )
				$(this).parent().next().find('.rightkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.rightkey').hide(200)
				},500)
			}else{
				timer -= 10
				num += 0
				
				$(".result .fraction").html( num )
				$(this).parent().next().find('.wrongkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.wrongkey').hide(200)
				},500)
			}
		})
	}
	for (var i = 0; i < $(".subject-4 div").length; i++) {
		$(".subject-4 div").eq(i).click(function(){
			$(this).parent().hide()
			$(this).parent().next().show()
			if($(this).children().attr('class')=='answer'){
				num += 1
				
				$(".result .fraction").html( num )
				console.log( num )
				$(this).parent().next().find('.rightkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.rightkey').hide(200)
				},500)
			}else{
				timer -= 10
				num += 0
				/
				$(".result .fraction").html( num )
				$(this).parent().next().find('.wrongkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.wrongkey').hide(200)
				},500)
			}
		})
	}

	for (var i = 0; i < $(".subject-5 div").length; i++) {
		$(".subject-5 div").eq(i).click(function(){
			$(this).parent().hide()
			$(this).parent().next().show()
			if($(this).children().attr('class')=='answer'){
				num ++
				
				$(".result .fraction").html( num )
				console.log( num )
				$(this).parent().next().find('.rightkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.rightkey').hide(200)
				},500)
			}else{
				timer -= 10
				num += 0
				
				$(".result .fraction").html( num )
				$(this).parent().next().find('.wrongkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.wrongkey').hide(200)
				},500)
			}
		})
	}

	for (var i = 0; i < $(".subject-6 div").length; i++) {
		$(".subject-6 div").eq(i).click(function(){
			$(this).parent().hide()
			$(this).parent().next().show()
			if($(this).children().attr('class')=='answer'){
				num ++
				
				$(".result .fraction").html( num )
				console.log( num )
				$(this).parent().next().find('.rightkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.rightkey').hide(200)
				},500)
			}else{
				timer -= 10
				num += 0
				
				$(".result .fraction").html( num )
				$(this).parent().next().find('.wrongkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.wrongkey').hide(200)
				},500)
			}
		})
	}

	for (var i = 0; i < $(".subject-7 div").length; i++) {
		$(".subject-7 div").eq(i).click(function(){
			$(this).parent().hide()
			$(this).parent().next().show()
			if($(this).children().attr('class')=='answer'){
				num ++
				
				$(".result .fraction").html( num )
				console.log( num )
				$(this).parent().next().find('.rightkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.rightkey').hide(200)
				},500)
			}else{
				timer -= 10
				num += 0
				
				$(".result .fraction").html( num )
				$(this).parent().next().find('.wrongkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.wrongkey').hide(200)
				},500)
			}
		})
	}

	for (var i = 0; i < $(".subject-8 div").length; i++) {
		$(".subject-8 div").eq(i).click(function(){
			$(this).parent().hide()
			$(this).parent().next().show()
			if($(this).children().attr('class')=='answer'){
				num ++
				
				$(".result .fraction").html( num )
				console.log( num )
				$(this).parent().next().find('.rightkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.rightkey').hide(200)
				},500)
			}else{
				timer -= 10
				num += 0
				
				$(".result .fraction").html( num )
				$(this).parent().next().find('.wrongkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.wrongkey').hide(200)
				},500)
			}
		})
	}

	for (var i = 0; i < $(".subject-9 div").length; i++) {
		$(".subject-9 div").eq(i).click(function(){
			$(this).parent().hide()
			$(this).parent().next().show()
			if($(this).children().attr('class')=='answer'){
				num ++
				
				$(".result .fraction").html( num )
				console.log( num )
				$(this).parent().next().find('.rightkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.rightkey').hide(200)
				},500)
			}else{
				timer -= 10
				num += 0
				
				$(".result .fraction").html( num )
				$(this).parent().next().find('.wrongkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.wrongkey').hide(200)
				},500)
			}
		})
	}

	for (var i = 0; i < $(".subject-10 div").length; i++) {
		$(".subject-10 div").eq(i).click(function(){
			$(this).parent().hide()
			$(this).parent().next().show()
			if($(this).children().attr('class')=='answer'){
				num ++
				
				$(".result .fraction").html( num )
				console.log( num )
				$(this).parent().next().find('.rightkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.rightkey').hide(200)
				},500)
			}else{
				timer -= 10
				num += 0
				
				$(".result .fraction").html( num )
				$(this).parent().next().find('.wrongkey').show()
				setTimeout(()=>{
					$(this).parent().next().find('.wrongkey').hide(200)
				},500)
			}
		})
	}
	
	
	
	
	
	
	
	
	
	
	
	
})