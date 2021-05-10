{
	type PageInfo = {
		title: string;
	};
	type Page = 'home' | 'about' | 'contact';
	// map과 비슷
	const nav: Record<Page, PageInfo> = {
		home: { title:'Home' },
		about: { title:'About' },
		contact: { title: 'Contact' },
	}

	type Product = 'cat' | 'dog';
	// Capitalize : convert first character of string literal type to uppercase
	type NewProduct = Capitalize<Product>; // 'Cat'|'Dog'
}