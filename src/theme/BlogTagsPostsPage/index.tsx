/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BlogPostPreview from '@theme/BlogPostPreview';
import BlogListPaginator from '@theme/BlogListPaginator';
import Link from '@docusaurus/Link';

interface TagInfo {
	label: string;
	permalink: string;
	count: number;
}

interface Props {
	tag: TagInfo;
	items: any[];
	sidebar: any;
	listMetadata: any;
}

function BlogTagsPostsPage(props: Props): JSX.Element {
	const { tag, items, sidebar, listMetadata } = props;
	const {
		siteConfig: { title: siteTitle },
	} = useDocusaurusContext();

	const title = `Posts tagged "${tag.label}"`;

	return (
		<Layout
			title={title}
			description={`Blog posts tagged with ${tag.label}`}
			wrapperClassName='blog-wrapper'
		>
			<div className='container margin-vert--lg'>
				<div className='row'>
					<main className='col col--12'>
						<header className='margin-bottom--xl'>
							<h1>{title}</h1>
							<p>
								<Link to='/blog/tags'>← View all tags</Link>
							</p>
						</header>

						<div className='row'>
							{items.map(({ content: BlogPostContent }) => (
								<div
									className='col col--4 row-preview'
									key={BlogPostContent.metadata.permalink}
								>
									<BlogPostPreview
										frontMatter={BlogPostContent.frontMatter}
										metadata={BlogPostContent.metadata}
										truncated={BlogPostContent.metadata.truncated}
									>
										<BlogPostContent />
									</BlogPostPreview>
								</div>
							))}
						</div>

						<BlogListPaginator metadata={listMetadata} />
					</main>
				</div>
			</div>
		</Layout>
	);
}

export default BlogTagsPostsPage;
