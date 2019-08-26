
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class CreatePostInput {
    title?: string;
}

export class VotePostInput {
    id?: number;
    vote?: number;
}

export abstract class IMutation {
    abstract createPost(createPostInput?: CreatePostInput): Post | Promise<Post>;

    abstract votePost(votePostInput?: VotePostInput): Post | Promise<Post>;
}

export class Post {
    id?: number;
    title?: string;
    vote?: number;
}

export abstract class IQuery {
    abstract getPosts(): Post[] | Promise<Post[]>;

    abstract post(id: string): Post | Promise<Post>;
}

export abstract class ISubscription {
    abstract postCreated(): Post | Promise<Post>;

    abstract postVoted(): Post | Promise<Post>;
}
