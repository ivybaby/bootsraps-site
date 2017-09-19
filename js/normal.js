(function($){
	
	var opt;
	$.fn.dbModal=function(options){
		//var scrollTop=document.documentElement.scrollTop||document.body.scrollTop; //滚动的高度
		opt = $.extend({}, $.fn.dbModal.defaults, options);
	
		$(opt.modalDiv).css({"display":"block"});
		
	    $(""+opt.modalDiv+" .close,"+opt.modalDiv+"").on("click",function(){
	    	var $oPar=$(this).closest(".db-modal");
	    	$oPar.css({"display":"none"});
	    	
	    	if(opt.isCloseAction){
	    		opt.afterCloseAction();
	    	}
	    });
	    
	    $(opt.targetDiv).on("click",function(e){
	    	e.stopPropagation();
	    });
	    $(this).on("click",".btn-default",function(){
	    	$(opt.modalDiv).click();
	    	if(opt.isAddAction){
	    		opt.afterAction();
	    	}
	    })
	    
	    
	}

	
})(jQuery)

