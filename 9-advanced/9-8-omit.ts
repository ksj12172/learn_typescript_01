{
	type Video = {
		id: string;
		title: string;
		url: string;
		data: string;
	}
	/**
	 * omit: 빼고 싶은 것만 만들 수 있다
	 * type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
	 * T : id, title, url, data
	 * K : url, data
	 * 
	 * exclude from T those types that are assignable to U
	 * type Exclude<T, U> = T extends U ? never : T;
	 * 전달된 T에 U가 exclude된 것을 return한다
	 */
	type VideoMetadata = Omit<Video,'url' | 'data'>;

	function getVideo(id: string): Video {
		return {
			id,
			title: 'video',
			url: 'https://..',
			data: 'byte-data..',
		};
	}
	// pick : 기존 type에서 원하는 속성과 value를 뽑아서 만들 수 있다
	function getVideoMetadata(id: string):  VideoMetadata {
		return {
			id: id,
			title: 'title',
		};
	}
}