# SS Tailwind UI

[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=flat&logo=storybook&logoColor=white)](https://storybook.js.org/)
[![Radix UI](https://img.shields.io/badge/Radix%20UI-161618?style=flat&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)

[You can view the English documentation here.](./README.md)

---

이 프로젝트는 **Tailwind CSS**, **TypeScript**, 그리고 **Radix UI**를 기반으로 제작된, 커스텀 React 컴포넌트 모음입니다. shadcn/ui에서 영감을 받은 보일러플레이트의 기본 컴포넌트 세트를 포함하고 있지만, 핵심 목표는 **Avatar 컴포넌트 모음**과 같이 새롭고 기능이 풍부한 컴포넌트를 제작하는 것입니다.

모던 웹 애플리케이션을 위한 강력하고 조합 가능한 컴포넌트를 개발하고 선보이는 것을 지향합니다.

## ✨ 대표 컴포넌트: Avatar

이 컬렉션의 중심은 높은 커스터마이징 기능을 제공하는 `Avatar` 컴포넌트입니다. 다양한 사용 사례를 유연하게 처리하도록 설계되었습니다.

- **다양한 타입**: 이미지(`img`), 이니셜(`initial`), 아이콘(`icon`) 아바타를 지원합니다.
- **자유로운 커스터마이징**: 모양, 크기, 텍스트 등을 제어할 수 있습니다.
- **상태 표시**: 사용자의 상태(온라인, 오프라인 등)를 쉽게 표시할 수 있습니다.
- **그룹화**: `GroupAvatar` 컴포넌트를 사용하여 여러 아바타를 멋지게 겹쳐 표시할 수 있습니다.
- **높은 접근성**: 접근성을 염두에 두고 제작되었습니다.

## 📖 사용 예시

`Avatar` 및 `GroupAvatar` 컴포넌트를 사용하는 방법입니다.

```tsx
import Avatar from 'src/features/avatars/components/Avatar';
import GroupAvatar from 'src/features/avatars/components/avatarType/GroupAvatar';
import { User, Users } from 'lucide-react';

function AvatarShowcase() {
  return (
    <div className="space-y-8">
      {/* 개별 아바타 */}
      <div className="flex items-center gap-4">
        <Avatar type="initial" text="SS" size={12} />
        <Avatar type="img" src="/path/to/image.png" size={12} status="online" />
        <Avatar type="icon" src={User} size={12} shape="rounded" />
      </div>

      {/* 그룹 아바타 */}
      <GroupAvatar>
        <Avatar type="img" src="/path/to/user1.png" size={10} />
        <Avatar type="img" src="/path/to/user2.png" size={10} />
        <Avatar type="initial" text="AB" size={10} />
        <Avatar type="icon" src={Users} size={10} />
      </GroupAvatar>
    </div>
  );
}
```

## 🚀 기반 아키텍처

이 프로젝트의 컴포넌트들은 다음과 같은 강력한 최신 스택을 활용합니다:

- **기본 Primitive**: 핵심 로직과 접근성은 스타일이 적용되지 않은 [Radix UI](https://www.radix-ui.com/)의 Primitive로 처리됩니다.
- **유틸리티-우선 스타일링**: 모든 스타일링은 [Tailwind CSS](https://tailwindcss.com/)를 사용합니다.
- **컴포넌트 Variant**: Variant는 [Class Variance Authority (CVA)](https://cva.style/docs)를 통해 관리됩니다.
- **지능적인 클래스 병합**: `tailwind-merge`를 사용하여 스타일 충돌을 방지합니다.

## 🛠️ 개발 환경 실행

개발 환경을 실행하고 프로젝트에 기여하려면 다음 단계를 따르세요.

1.  **리포지토리 클론:**
    ```bash
    git clone https://github.com/khs990704/TailwindCSS-Components.git
    cd ss-tailwind-ui
    ```

2.  **의존성 설치:**
    ```bash
    yarn install
    ```

3.  **Storybook 실행:**
    ```bash
    yarn storybook
    ```
    이 명령은 Storybook 서버를 시작하며, 여기서 컴포넌트를 실시간으로 확인하고 개발할 수 있습니다.

## 🤝 기여하기

기여는 언제나 환영입니다! `Avatar`와 같은 새로운 컴포넌트를 개발하신다면 다음 구조를 따라주세요:

-   **컴포넌트**: 새롭고 기능이 풍부한 컴포넌트는 `src/features` 내의 자체 디렉토리에 배치하세요.
-   **스토리**: `src/stories` 디렉토리에 컴포넌트 사용법을 문서화하기 위한 Storybook 파일을 추가하세요.
-   **테스트**: 기능이 올바르게 작동하는지 확인하기 위한 단위 테스트를 추가하세요.

시작하려면 이슈를 열거나 풀 리퀘스트를 제출해 주세요.

## 📝 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.