import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

const AccordionMenu = ({
  menuList,
  menuTitle,
  isShowmore,
  isShowCheckbox,
  chekcType,
}) => {
  return (
    <Accordion className="menu-accordion">
      <Accordion.Item>
        <Accordion.Header className="menu-title">{menuTitle}</Accordion.Header>
        <Accordion.Body>
          <ul className="sub-menu-list">
            {menuList.map(
              (item, index) =>
                index < 5 && (
                  <li className="sub-menu-item py-1">
                    {isShowCheckbox ? (
                      <Form.Check
                        inline
                        label={item}
                        name={item}
                        type={chekcType}
                        id={`inline-checkbox-${index}`}
                      />
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                )
            )}
            {isShowmore && (
              <li className="sub-menu-item py-1 show-more">See all</li>
            )}
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionMenu;
