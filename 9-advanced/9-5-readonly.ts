{
	type ToDo = {
		title: string;
		description: string;
	};
	/* 항상 불변성을 보장하기 위해 readonly 사용
	* 흔하게 쓰는 타입들은 utility type이라고 해서 이미 개발자들이 만들어놓음
	* Make all properties in T required : [P in keyof T]-?: T[P]; -는 절대적인 것
	*/
	function display(todo: Readonly<ToDo>) {
		todo.title = 'test';
	}
}