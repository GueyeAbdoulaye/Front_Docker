export interface UnsplashImage {
    id: string;
    slug: string;
    alternative_slugs: {
        en: string;
        es: string;
        ja: string;
        fr: string;
        it: string;
        ko: string;
        de: string;
        pt: string;
    };
    created_at: string;
    updated_at: string;
    promoted_at: string | null;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string | null;
    alt_description: string | null;
    breadcrumbs: any[];
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
        small_s3: string;
    };
    links: {
        self: string;
        html: string;
        download: string;
        download_location: string;
    };
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship: any | null;
    topic_submissions: Record<string, any>;
    asset_type: string;
    user: {
        id: string;
        updated_at: string;
        username: string;
        name: string;
        first_name: string;
        last_name: string;
        twitter_username: string | null;
        portfolio_url: string | null;
        bio: string | null;
        location: string | null;
        links: {
            self: string;
            html: string;
            photos: string;
            likes: string;
            portfolio: string;
            following: string;
            followers: string;
        };
        profile_image: {
            small: string;
            medium: string;
            large: string;
        };
        instagram_username: string | null;
        total_collections: number;
        total_likes: number;
        total_photos: number;
        total_promoted_photos: number;
        total_illustrations: number;
        total_promoted_illustrations: number;
        accepted_tos: boolean;
        for_hire: boolean;
        social: {
            instagram_username: string | null;
            portfolio_url: string | null;
            twitter_username: string | null;
            paypal_email: string | null;
        };
    };
    exif: {
        make: string;
        model: string;
        name: string;
        exposure_time: string;
        aperture: string;
        focal_length: string;
        iso: number;
    };
    location: {
        name: string | null;
        city: string | null;
        country: string | null;
        position: {
            latitude: number;
            longitude: number;
        };
    };
    meta: {
        index: boolean;
    };
    public_domain: boolean;
    tags: {
        type: string;
        title: string;
    }[];
    views: number;
    downloads: number;
    topics: any[];
}

export interface UserImage {
    id: string;
    name: string;
    path: string;
    user_id: string;
}