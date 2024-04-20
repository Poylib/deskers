'use client';
import { Post } from '../data/model/type';
import { useMediaQuery } from '../hook/useResponsive';
import { cn } from '../utils';
import CategoryList from './post_list/CategoryList';
import PostCard from './post_list/PostCard';
import Link from 'next/link';

const PostListPage = ({
  group,
  category,
  hashTags,
  posts,
}: {
  group?: string;
  category?: string;
  posts: Post[];
  hashTags: {
    category: string;
    displayName: string;
    count: number;
  }[];
}) => {
  const isPageWide = useMediaQuery('(min-width: 640px)');

  return (
    <>
      <div>
        <section className="mx-auto mt-12 w-full max-w-[1050px] px-4">
          <div className="box7">
            {isPageWide ? (
              <>
                <div className="box7-2">
                  <aside className="sidemenu">
                    <ul>
                      <li>
                        <div className="a">
                          <Link href="/content-seo">CONTENT-SEO</Link>
                        </div>
                      </li>
                      <li>
                        <div className="a">
                          <Link href="/deskterior">테스크테리어</Link>
                        </div>
                      </li>
                    </ul>
                  </aside>
                </div>
                <div className="box7-1">
                  <CategoryList
                    allPostCount={posts.length}
                    categoryList={hashTags.map((h) => {
                      return { dirName: h.category, publicName: h.displayName, count: h.count };
                    })}
                    group={group}
                    currentCategory={category}
                  />
                  <section>
                    <ul className={cn(`grid grid-cols-1 gap-8 lg:gap-12`, posts.length >= 2 ? 'md:grid-cols-2' : 'md:grid-cols-1')}>
                      {posts.map((post) => (
                        <PostCard key={post.uri + post.date} post={post as any} />
                      ))}
                    </ul>
                  </section>
                </div>
              </>
            ) : (
              <>
                <section className="mx-auto mt-12 w-full max-w-[1050px] px-4">
                  <CategoryList
                    allPostCount={posts.length}
                    categoryList={hashTags.map((h) => {
                      return { dirName: h.category, publicName: h.displayName, count: h.count };
                    })}
                    group={group}
                    currentCategory={category}
                  />
                  <section>
                    <ul className={cn(`grid grid-cols-1 gap-8 lg:gap-12`, posts.length >= 2 ? 'md:grid-cols-2' : 'md:grid-cols-1')}>
                      {posts.map((post) => (
                        <PostCard key={post.uri + post.date} post={post as any} />
                      ))}
                    </ul>
                  </section>
                </section>
              </>
            )}
          </div>
        </section>
      </div>

      <style jsx>{`
        .box7-1 {
          float: right;
          width: 80%;
          padding-left: 50px;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }

        .box7-2 {
          float: left;
          width: 20%;
        }

        .sidemenu {
          border: solid 5px #dddddd;
        }

        .sidemenu ul {
          margin: 0;
          list-style: none;
        }

        .sidemenu li .a {
          display: block;
          padding: 3px;
          padding-left: 10px;
          padding-right: 10px;
          border-top: solid 1px #dddddd;
          color: #000000;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
        }

        .sidemenu li .a:hover {
          background-color: #eeeeee;
        }
      `}</style>
    </>
  );
};

export default PostListPage;
