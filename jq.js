$(function() {
	$('#yes').click(function(event) {
		modal('�Ҿ�֪����һ����Ը��ġ�(^_^)', function() {
			$('.page_one').addClass('hide');
			$('.page_two').removeClass('hide');
			typeWrite();
			fireworks();
			
		});
	});
	$('#no').click(function(event) {
		modal('���˲�˵������', A);
	});
});

function A() {
	modal('��ϲ���㣡', B);
}

function B() {
	modal('��֪�����ڵ�����һ�仰', C);
}

function C() {
	modal('������Ҫ�ܾ���', D);
}

function D() {
	modal('�ܾ��ң������ڵ�', E);
}

function E() {
	modal('�Ⱳ�Ӷ������������뿪��', F);
}

function F() {
	modal('�����߰�', G);
}

function G() {
	modal('����֤��д����', H);
}

function H() {
	modal('�һ�����', I);
}

function I() {
	modal('�һ�������', J)
}

function J() {
	modal('��Ӧ�Ұ�', function() {
//		fireworks();
	});
}

function fireworks() {
	$('.page_one').addClass('hide');
	$('.page_two').removeClass('hide');
	$('.page_two').fireworks({ 
	  sound: false, 
	  opacity: 0.9, 
	  width: '100%', 
	  height: '100%' 
	});	
}

function modal(content, callback) {
	var tpl = '<div class="container">'+
							'<div class="mask"></div>'+
							'<div class="modal">'+
								'<p>'+ content +'</p>'+
								'<button type="button" id="confirm" class="confirm">ȷ��</button>'+
							'</div>'+
						'</div>';
	$('body').append(tpl);
	$(document).on('click', '.confirm', function() {
		$('.container').remove();
		callback();
	});
}

var myWords = '����˵���˵�һ��������2920���ˣ����������మ�ĸ���ֻ��0.000049������ãã�˺��У���������������ֵ�øм������మ����һ���ѵá����ԣ��Һ��������������������㡣��ϣ���и�����һ����ˣ��ܿ�����д��������״̬�����������е���־�������Ҵ�С�������Ƭ����������ϲ���ĸ衣������ԣ���������ȥ��ϲ���ĵط���ֻ���ֲ��������ഺ��������Ф�ɷ�';
var x = 0;
var speed = 150;
var current = 0;
function typeWrite(){
	$('.type_words').html(myWords.substring(0, x++)+'_');
	var timer = setTimeout("typeWrite()", speed);
	if (x == myWords.length) {
		x = myWords.length;
		clearTimeout(timer)
	}
}
