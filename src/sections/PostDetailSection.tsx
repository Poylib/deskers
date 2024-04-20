'use client';
import { Post } from '../data/model/type';
import BreadCrumbs from './post_detail/BreadCrumbs';
import { PostBody } from './post_detail/PostBody';
import { PostHeader } from './post_detail/PostHeader';
import Thumbnail from './post_detail/Thumbnail';

export function PostDetailSection({ group, slug, post }: { group?: string; slug?: string; post: Post }) {
  return (
    <div>
      <div className="prose mx-auto w-full max-w-[950px] px-4 dark:prose-invert">
        <Thumbnail img={post.thumbnail} />
        <div className="box7">
          <div className="box7-1">
            <BreadCrumbs group={group!} slug={slug!} />
            <PostHeader post={post as any} />
            <PostBody post={post as any} />
          </div>
          <div className="box7-2">
            <aside className="sidemenu">
              <h1>
                <i className="fa fa-caret-square-o-down"></i>사업 소개
              </h1>
              <ul>
                <li>
                  <a href="#">데이터 축적</a>
                </li>
                <li>
                  <a href="#">데이터 시각화</a>
                </li>
                <li>
                  <a href="#">애플리케이션 활용</a>
                </li>
                <li>
                  <a href="#">24시간 지원</a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
      <style jsx>{`
        .box7:after {
          content: '';
          display: block;
          clear: both;
        }

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
          border: solid 6px #dddddd;
        }

        .sidemenu h1 {
          margin: 0;
          // padding: 10px;
          font-size: 16px;
          font-weight: normal;
        }

        .sidemenu h1 i {
          margin-right: 5px;
          color: #8abc60;
          font-size: larger;
        }

        .sidemenu ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .sidemenu li a {
          display: block;
          // padding: 10px;
          border-top: solid 1px #dddddd;
          color: #000000;
          font-size: 14px;
          text-decoration: none;
        }

        .sidemenu li a:hover {
          background-color: #eeeeee;
        }
      `}</style>
    </div>
  );
}

export default PostDetailSection;
