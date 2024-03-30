## MarkDown 설치 패키지

- remark
- remark-html
- gray-matter
- github-markdown-css

markdown demo project 참고
https://github.com/emanuelefavero/nextjs-app-router-blog

## MD파일에 변수 선언 가능

gray-matter 기능

```
md파일 상단에 아래 처럼 선언
===========================
---
title: 'MarkDown Sample Page'
date: '2020-01-02'
---
```

```
코드 상에서 아래처럼 변수 접근 가능
================================
const matterResult = matter(markdown)
title = matterResult.data.title;
date = matterResult.data.date;
```

## MD파일 HTML 적용시 스타일

import 'github-markdown-css';
markdown-body라는 class명 밑으로 markdown 넣으면 css 먹음

```
    <div className={"markdown-body"} >
        <div
            className={"text-gray-600"}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
    </div>
```
