# SS Tailwind UI

[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=flat&logo=storybook&logoColor=white)](https://storybook.js.org/)
[![Radix UI](https://img.shields.io/badge/Radix%20UI-161618?style=flat&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)

[한국어 설명서는 여기에서 볼 수 있습니다.](./README.ko.md)

---

This project is a collection of custom, accessible, and reusable React components built upon a foundation of **Tailwind CSS**, **TypeScript**, and **Radix UI**. While it includes a base set of components from a boilerplate (inspired by shadcn/ui), the primary focus is on creating new, feature-rich components like the **Avatar suite**.

The goal is to develop and showcase powerful, composable components for modern web applications.

## ✨ Featured Component: Avatar

The centerpiece of this collection is the highly customizable `Avatar` component. It's designed to be flexible and cover a wide range of use cases.

- **Multiple Types**: Supports image (`img`), initial (`initial`), and icon (`icon`) avatars.
- **Customizable**: Control shape, size, text, and more.
- **Status Indicator**: Easily display user status (online, offline, etc.).
- **Grouping**: Includes a `GroupAvatar` component to elegantly stack multiple avatars.
- **Accessible**: Built with accessibility in mind.

## 📖 Usage Example

Here's how you can use the `Avatar` and `GroupAvatar` components.

```tsx
import Avatar from 'src/features/avatars/components/Avatar';
import GroupAvatar from 'src/features/avatars/components/avatarType/GroupAvatar';
import { User, Users } from 'lucide-react';

function AvatarShowcase() {
  return (
    <div className="space-y-8">
      {/* Individual Avatars */}
      <div className="flex items-center gap-4">
        <Avatar type="initial" text="SS" size={12} />
        <Avatar type="img" src="/path/to/image.png" size={12} status="online" />
        <Avatar type="icon" src={User} size={12} shape="rounded" />
      </div>

      {/* Grouped Avatars */}
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

## 🚀 Underlying Architecture

The components in this project leverage a powerful modern stack:

- **Base Primitives**: Core logic and accessibility are handled by unstyled primitives from [Radix UI](https://www.radix-ui.com/).
- **Utility-First Styling**: [Tailwind CSS](https://tailwindcss.com/) is used for all styling.
- **Component Variants**: Variants are managed by [Class Variance Authority (CVA)](https://cva.style/docs).
- **Intelligent Class Merging**: `tailwind-merge` prevents style conflicts.

## 🛠️ Development

To run the development environment and contribute to the project:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/khs990704/TailwindCSS-Components.git
    cd ss-tailwind-ui
    ```

2.  **Install dependencies:**
    ```bash
    yarn install
    ```

3.  **Run Storybook:**
    ```bash
    yarn storybook
    ```
    This will start the Storybook server, where you can see and develop components interactively.

## 🤝 Contributing

Contributions are welcome! If you're developing a new component like `Avatar`, please follow this structure:

-   **Components**: Place new, feature-rich components in their own directory within `src/features`.
-   **Stories**: Add a Storybook file for your component in `src/stories` to document its usage.
-   **Tests**: Add unit tests to ensure functionality.

Please open an issue or submit a pull request to get started.

## 📝 License

This project is licensed under the MIT License.
