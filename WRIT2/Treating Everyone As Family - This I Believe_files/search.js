(function($){$("#advancedsearch").submit(function(e){return false;});$("#searchsubmit").on('click',function(){var fname=$('#firstname').val().trim().replace(/\s\s+/g,' ').replace(/[^A-Za-z0-9 ]/g,'').replace(/\s/g,'+');var lname=$('#lastname').val().trim().replace(/\s\s+/g,' ').replace(/[^A-Za-z0-9 ]/g,'').replace(/\s/g,'+');var searchTerm=$('#searchterm').val().trim().replace(/\s\s+/g,' ').replace(/[^A-Za-z0-9 ]/g,'').replace(/\s/g,'+');var searchTermWords=$('#searchterm').val().trim().replace(/\s\s+/g,' ').replace(/[^A-Za-z0-9 ]/g,'');var error='';var searchValue='';if(searchTerm===''){if(fname===''&&lname===''){error='You must enter at least one search term.'}
if(fname!==''&&lname!==''){searchValue='?firstname='+fname+'&lastname='+lname+'&s='+fname+'+'+lname;}
if(fname!==''&&lname===''){searchValue='?firstname='+fname+'&lastname='+'&s='+fname;}
if(fname===''&&lname!==''){searchValue='?firstname='+'&lastname='+lname+'&s='+lname;}}
else if(searchTerm!==''){var words=searchTermWords.split(' ');if(words.length>3){error='Keyword searches are limited to no more than 3 words'}
if(fname===''&&lname===''){searchValue='?firstname='+'&lastname='+'&s='+searchTerm;}
if(fname!==''&&lname!==''){searchValue='?firstname='+fname+'&lastname='+lname+'&s='+searchTerm;}
if(fname!==''&&lname===''){searchValue='?firstname='+fname+'&lastname='+'&s='+searchTerm;}
if(fname===''&&lname!==''){searchValue='?firstname='+'&lastname='+lname+'&s='+searchTerm;}}
if(error!==''){$('#searcherror').html(error);if($('#searcherror').hasClass("hidden")){$('#searcherror').removeClass("hidden");}}
if(error===''&&!$('#searcherror').hasClass("hidden")){$('#searcherror').empty();$('#searcherror').addClass("hidden");}
if(error===''&&searchValue!==''){searchValue+='&submit=Search';window.open(window.location.protocol+'//'+window.location.hostname+'/'+searchValue,'_self');}});})(jQuery);