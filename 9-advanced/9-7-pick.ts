{
	type Video = {
		id: string;
		title: string;
		url: string;
		data: string;
	}
	/**
	 * pick : 기존 type에서 원하는 것을 골라
	 * type Pick<T, K extends keyof T> = { // K: T type에 있는 key들을 상속함
	 * 	[P in K]: T[P];
	 * }
	 */
	type VideoMetadata = Pick<Video,'id' |'title'>;

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