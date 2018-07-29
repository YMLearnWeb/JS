<html>
    <head><title>Search Module</title></head>
    <body>
        <div class="result-image-block"><img id="result-image" src='' /></div>
        <form action="javascript:startSearch();"></form>
            <div id="input_block">
                <input type="text" id="search_input_text" placeholder="search text" />
            </div>
        </form>
        <div id="result_block" style="display:none;">
            <ul id="result_list">
                <li data-index=""></li>
            </ul>
        </div>
        <div id="note-no-word" style="display:none;">Sorry, we can't find the name your input</div>
    <stript>
        
        var ori_array =['abc','add','afeg','beeee','bade','bc'], 
        sort_array=[], 
        temp_array, 
        result_array[],
        s_word='', 
        result_html;
        
        update_array = string_array.sort();

        function searchKey(word){
            result_array = $.filter(temp_array, function(item){
               return item.toLowerCase().indexOf(word.toLowerCase()) > -1;
            })
        }

        function updateDoms($dom,$note){
            if(result_array.length === 0){
                $dom.hide();
                $node.show();
                return;
            }
            result_temp = "";
            $.each(result_array,function(i,item)){
                result_html = result_html + '<li data-index="' +i + '"' + '>' + item + '</li>'; 
            }
            $dom.html(result_html);
            $dom.show();
        }

        function startSearch(){
            var word = $("#search_input_text").val().trim();
            if(s_word.indexOf(word) < -1){
                temp_array = sort_array;
                searchKey(word)
            }else {
                temp_array = result_array;
                searchKey(word)
            }
            s_word = word;
            updateDoms($("#result_list"));
        }

        function updateImage(image_name){
            $('#result-image').attr('src,image_name);
        }

        $('#search_input_text').on('keydown',function(){
            $("#note-no-word").hide();
            $this = $(this);
            var input_word = $(this).val().trim();
            startSearch(input_word);
        })

        $("#result_list li").on('click', function(){
            var image_name = $this.html();
            $this = $(this);
            $('#search_input_text').val(image_name);
            updateImage();          
        })

    </stript>
    </body>
</html>
