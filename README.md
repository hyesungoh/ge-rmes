# Gérmes

Next.js를 써볼 겸, 2021-1 팀창업입문을 위한 웹

## Development

> React, Next.js, TypeScript, Styled jsx

## Develop log

-   #### Create-Next-App

```terminal
npx create-next-app projectname

npm run dev
```

-   #### Using TypeScript in Next.js

```termianl
touch tsconfig.json

npm run dev // 사용 시 에러 로그에 Next.js가 Setup 가이드를 제시해줌
npm install --save-dev typescript
```

-   #### Using Styled-jsx

install

```terminal
npm i --save styled-jsx
```

basic usage

```tsx
export default () => (
    <div className="root">
        <style jsx>{`
            .root {
                color: green;
            }
        `}</style>
    </div>
);
```

global usage

```tsx
export default () => (
    <div className="root">
        <style global jsx>{`
            body {
                background: red;
            }
        `}</style>
    </div>
);
```

-   #### Absoulte path in Next.js

`tsconfig.json` or `jsconfig.json`

```json
"compilerOptions": {
        "baseUrl": ".", // 추가
        ...
}
```
