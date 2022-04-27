import axios from 'axios';
import { useState, useEffect } from 'react';
import OrgChart from 'react-orgchart';

export default function (props) {

    const [tree, setTree] = useState({});

    const getNode = (node) => {
        var nodeChildren = [];

        node.children_companies.forEach(node => {
            nodeChildren.push(getNode(node));
        });

        return {
            id: node.id,
            title: node.title,
            children_companies: nodeChildren,
            isopen: node.isopen,
            children: node.isopen ? nodeChildren : [],
        };
    }

    const openNode = (node, clickedNode) => {
        node.children_companies.forEach(subnode => {
            if (subnode.id == clickedNode.id) {
                subnode.isopen = subnode.isopen ? 0 : 1;
            } else {
                openNode(subnode, clickedNode);
            }
        });
    }

    const nodeClick = (clickedNode) => {
        let newTree = { ...tree };
        openNode(newTree, clickedNode);
        setTree(getNode(newTree));
    }

    useEffect(() => {
        setTree(getNode({ ...props.page_items.companies_chart_list[0] }));
    }, []);

    return (
        <OrgChart
            tree={tree}
            NodeComponent={({ node }) => (
                <div style={{
                    backgroundColor: '#14334a',
                    border: '0.0625rem solid #14334a',
                    borderRadius: '50px',
                    color: '#fff',
                }} onClick={() => nodeClick(node)}> {node.title}</div >
            )}
        />
    )
}

export async function getStaticProps() {
    let response = await axios.get('our-story');

    return {
        props: response.data
    }
}