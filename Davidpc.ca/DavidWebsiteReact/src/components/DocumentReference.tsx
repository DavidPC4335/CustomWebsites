import React from 'react';

export interface DocumentReferenceProps {
	url: string;
	filename: string;
	fileType?: string;
	secondaryTitle?: string;
	className?: string;
}

const ExternalIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		xmlSpace="preserve"
		aria-hidden="true"
		role="img"
		style={{ display: 'inline-block', flexShrink: 0 }}
	>
		<path
			d="M14 3h7v7"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="square"
			strokeLinejoin="miter"
		/>
		<path
			d="M21 3l-9 9"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="square"
			strokeLinejoin="miter"
		/>
		<path
			d="M21 14v6H3V3h6"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="square"
			strokeLinejoin="miter"
		/>
	</svg>
);

const DocumentReference: React.FC<DocumentReferenceProps> = ({
	url,
	filename,
	fileType,
	secondaryTitle,
	className
}) => {
	const label = `${filename} (${fileType})`;

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className={`footer__link${className ? ` ${className}` : ''}`}
			aria-label={`Open ${label} in a new window`}
			style={{
				display: 'inline-flex',
				alignItems: 'center',
				gap: 'var(--spacing-xs)',
				flexWrap: 'wrap',
				lineHeight: 1.2,
				// Emphasis styles - more subtle
				border: '2px var(--border-style) var(--border-color)',
				backgroundColor: 'var(--grey-100)',
				boxShadow: '2px 2px 0 var(--shadow-color)',
				padding: 'var(--spacing-xs) var(--spacing-sm)',
				transition: 'all var(--transition-medium)'
			}}
		>
			<span
				style={{
					display: 'inline-flex',
					alignItems: 'center',
					gap: 'var(--spacing-xs)',
					textTransform: 'none',
					letterSpacing: 'normal'
				}}
			>
				<span>{filename}</span>
				{fileType && <span
					aria-hidden="true"
					style={{
						fontSize: '0.75rem',
						padding: '2px 6px',
						border: '1px var(--border-style) var(--border-color)',
						backgroundColor: 'var(--content-bg)'
					}}
				>
					{fileType}
				</span>}
				<ExternalIcon size={16} />
			</span>
			{secondaryTitle ? (
				<span
					style={{
						opacity: 0.8,
						fontSize: '0.9rem',
						textTransform: 'none',
						display: 'block',
						width: '100%'
					}}
				>
					{secondaryTitle}
				</span>
			) : null}
		</a>
	);
};

export default DocumentReference;

