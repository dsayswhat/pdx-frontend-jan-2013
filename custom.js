				/* Add simple striping by identifying even classes */
				$('#groceryList li:even').addClass('stripe');
				
				/* Add an Onclick event */
				
				$('#groceryList li').click(function(){
					alert('This is a simple click event!')
					$(this).css('background-color','red');
				});
			
				
				/* Demonstrate easy DIY expander */
				
				$('#exampleAccordion article').click(function(){
					$('#exampleAccordion article p').slideDown(800);
				});
				
				
				/* Demonstrate easy DIY accordion */
				
				$('#exampleAccordion article').click(function(){
					$('p',this).toggle(800);
				});
				
				
				/* Use the jQuery Cycle plug in */
				
				$('#cycleExample ul').cycle();
				
	
