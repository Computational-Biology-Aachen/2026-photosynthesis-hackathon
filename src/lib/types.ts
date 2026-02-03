export type Participant = {
	name: string;
	slug: string;
	mail?: string;
	github?: string;
	gitlab?: string;
	website?: string;
	orcid?: string;
};
export type Trainer = {
	name: string;
	slug: string;
	order: number;
	affiliation?: string;
	city?: string;
	country: string;
	mail?: string;
	github?: string;
	gitlab?: string;
	website?: string;
	orcid?: string;
};
