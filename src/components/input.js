import $ from 'jquery';

const Input = () => {
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.ctrlKey && evt.keyCode == 8) {
          $(this).prev('.inputs').focus();
        }
    };
    
      $(function() {
        $(".inputs").keyup(function () {
            if (this.value.length == this.maxLength) {
              $(this).next('.inputs').focus();
            }
        });
    });
    
    return (
    <div className="App">
          <input class="inputs" type="text" maxlength="1" />
          <input class="inputs" type="text" maxlength="1" />
          <input class="inputs" type="text" maxlength="1" />
          <input class="inputs" type="text" maxlength="1" />
          <input class="inputs" type="text" maxlength="1" />
    
        </div>
    )
}